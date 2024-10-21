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
		image_url: `https://${config.blog.hostname}/favicon.ico`,
		generator: "blog-ng-next by Allenyou (Based on Next.js & Tailwind CSS)",
		custom_elements: [
			{
				follow_challenge: [
					{ feed_id: "68921984956825606" },
					{ user_id: "69221670505945088" },
				],
			},
		],
	});
	const cms = await initCMS();
	cms.postIds.forEach((id) => {
		const post = cms.getPost(id)!;
		feed.item({
			title: post.title,
			description: post.htmlContent,
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
