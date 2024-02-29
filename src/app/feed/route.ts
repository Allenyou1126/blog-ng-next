import { config } from "@/libs/config";
import { initCMS } from "@/libs/contents";
import RSS from "rss";

export async function GET() {
	const feed = new RSS({
		title: config.blog.title,
		description: config.blog.description,
		site_url: `https://${config.blog.hostname}/`,
		feed_url: `https://${config.blog.hostname}/feed/`,
		language: "zh-CN",
		image_url: "",
		generator: "blog-ng-next by Allenyou (Based on Next.js & Tailwind CSS)",
	});
	const cms = initCMS();
	cms.postIds.forEach((id) => {
		const post = cms.getPost(id)!;
		feed.item({
			title: post.title,
			description: post.description,
			url: `https://${config.blog.hostname}/post/${id}`,
			date: post.created_at,
		});
	});
	return new Response(feed.xml(), {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
