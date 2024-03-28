/* eslint-disable @next/next/no-img-element */
import { generateMetadata } from "@/libs/generateMetadata";
import getAvatar from "@/libs/getAvatar";
import parseMarkdown from "@/libs/parseMarkdown";
import { readFile } from "fs/promises";
import Link from "next/link";
import path from "path";
import { LinkType } from "@/libs/types";
import { initCMS } from "@/libs/contents";
import { Comments } from "@/components/Comments";

export const metadata = generateMetadata("友情链接");

export default async function LinkPage() {
	const getContent = async () => {
		const res = await readFile(
			path.join(process.cwd(), "src", "data", "pages", "friend.md")
		);
		return res.toString();
	};
	const content = await getContent();
	const postContent = parseMarkdown(content);
	const cms = initCMS();
	var index = 0;
	const linkList = cms.links.map((link: LinkType) => {
		if (link.image == undefined) {
			link.image = getAvatar();
		}
		if (link.description == undefined) {
			link.description = "";
		}
		return (
			<Link
				key={++index}
				href={link.url}
				className="flex flex-nowrap items-center gap-4 hover:opacity-90 col-span-1">
				<img
					alt={`avatar-${link.title}`}
					src={link.image}
					className="rounded-full"
					width={80}
					height={80}
				/>
				<div className="grid grid-rows-3 py-6">
					<p className="font-semibold text-primary text-xl">{link.title}</p>
					<p className="opacity-60 row-span-2">{link.description}</p>
				</div>
			</Link>
		);
	});
	return (
		<div className="rounded-3xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg backdrop-filter w-full max-w-4xl md:w-4xl p-6 min-h-48">
			<p className="text-3xl font-bold mt-2 mb-8">友情链接</p>
			<div className="prose prose-ay dark:prose-invert max-w-4xl break-all">
				{postContent}
			</div>
			<div className="gap-4 grid grid-cols-1 md:grid-cols-2">{linkList}</div>
			<Comments />
		</div>
	);
}
