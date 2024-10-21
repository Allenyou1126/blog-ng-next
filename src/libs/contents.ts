import { LinkType, PostType } from "./types";
import { links as ln } from "@/data/links";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import fm from "front-matter";
import getOrDefault from "./getOrDefault";
import parseMarkdown, { parseToc, parseToRssHtml } from "./parseMarkdown";

class CMS {
	links: LinkType[] = [];
	postIds: number[] = [];
	private postContents: PostType[] = [];
	constructor() {}
	async init() {
		this.links = ln;
		const files = readdirSync(path.join(process.cwd(), "src", "data", "posts"));
		await Promise.all(
			files.map(async (filename) => {
				if (!filename.endsWith(".md")) {
					return;
				}
				const data = readFileSync(
					path.join(process.cwd(), "src", "data", "posts", filename)
				);
				const ret = fm(data.toString());
				const attr: any = ret.attributes;
				const content = ret.body;
				const react_content = parseMarkdown(content);
				const html_content = await parseToRssHtml(content);
				this.postContents.push({
					id: parseInt(attr.id),
					title: getOrDefault(attr.title, ""),
					originalContent: content,
					reactNodeContent: react_content,
					htmlContent: html_content,
					tocContent: parseToc(content),
					description: getOrDefault(attr.description, ""),
					created_at: new Date(
						getOrDefault(attr.created_at, "1919-08-10T11:45:14Z")
					),
					modified_at: new Date(
						getOrDefault(
							attr.modified_at,
							getOrDefault(attr.created_at, "1919-08-10T11:45:14Z")
						)
					),
				});
			})
		);
		this.postContents.sort((a, b) => {
			if (a.created_at == b.created_at) {
				return a.id < b.id ? -1 : 1;
			}
			return a.created_at < b.created_at ? 1 : -1;
		});
		for (var index = 0; index < this.postContents.length; ++index) {
			this.postIds.push(this.postContents[index].id);
		}
	}
	getPost(id: number) {
		return this.postContents.find((val) => {
			return val.id == id;
		});
	}
	getPosts(page: number) {
		const begin = (page - 1) * 10;
		const end = Math.min(page * 10, this.postIds.length);
		return this.postContents.slice(begin, end);
	}
}

var INSTANCE: CMS | null = null;

export const initCMS = async (): Promise<CMS> => {
	if (INSTANCE !== null) {
		return INSTANCE;
	}
	const cms = new CMS();
	await cms.init();
	INSTANCE = cms;
	return cms;
};
