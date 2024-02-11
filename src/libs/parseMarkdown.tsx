import MarkdownIt, { Token } from "markdown-it";
import HighlightJS from "highlight.js";
import { ReactNode } from "react";
import slugify from "@sindresorhus/slugify";
import mdit_anchor from "markdown-it-anchor";
import mdit_mathjax from "markdown-it-mathjax3";
import htmr from "htmr";
import AllenyouLink from "@/components/AllenyouLink";
import LazyloadImage from "@/components/LazyloadImage";
import { TocType } from "./types";

export const hljs = (str: string, lang: string): string => {
	const l = HighlightJS.getLanguage(lang);
	try {
		return HighlightJS.highlight(str, {
			language: l === undefined ? "plaintext" : lang,
		}).value;
	} catch (__) {}
	return "";
};

const slg = (s: string) => {
	return `content-${slugify(s)}`;
};

export const mdit = MarkdownIt({
	highlight: hljs,
	html: true,
})
	.enable("table")
	.use(mdit_mathjax)
	.use(mdit_anchor, {
		slugify: slg,
	});

function parseMarkdownToHtml(markdown: string): string {
	return mdit.render(markdown);
}

export function parseToc(markdown: string): TocType[] {
	const ast = mdit.parse(markdown, {});
	var flag = false;
	var title = "";
	var toc_array: { level: number; title: string; id: string }[] = [];
	ast.forEach((value: Token) => {
		if (value.type == "heading_open") {
			flag = true;
			return;
		}
		if (flag && value.type == "inline") {
			title = value.content;
			return;
		}
		if (flag && value.type == "heading_close") {
			flag = false;
			toc_array.push({
				level: Number(value.tag.charAt(1)),
				title: title,
				id: slg(title),
			});
			title = "";
			return;
		}
	});
	var ret: TocType[] = [];
	var cur: TocType | undefined = undefined;
	toc_array.forEach((tok) => {
		if (ret.length === 0) {
			ret.push({
				id: tok.id,
				display: tok.title,
				level: tok.level,
				child: [],
			});
			cur = ret[0];
			return;
		}
		while (cur !== undefined && cur.level >= tok.level) {
			cur = cur.parent;
		}
		if (cur === undefined) {
			ret.push({
				id: tok.id,
				display: tok.title,
				level: tok.level,
				child: [],
			});
			cur = ret[ret.length - 1];
		} else {
			cur.child.push({
				id: tok.id,
				display: tok.title,
				level: tok.level,
				child: [],
				parent: cur,
			});
			cur = cur.child[cur.child.length - 1];
		}
	});
	return ret;
}

export default function parseMarkdown(
	markdown: string
): ReactNode[] | ReactNode {
	const html = parseMarkdownToHtml(markdown);
	// console.log(html);
	return htmr(html, {
		transform: {
			a: AllenyouLink,
			img: LazyloadImage,
		},
	});
}
