import { Metadata } from "next";
import { config } from "./config";

export const generateMetadata = (subtitle: string = ""): Metadata => {
	var title = config.blog.title;
	if (subtitle != "") {
		title = `${subtitle} - ${title}`;
	}
	return {
		description: config.blog.description,
		title,
		alternates: {
			canonical: `https://${config.blog.hostname}`,
			types: {
				"application/rss+xml": [{ url: "feed", title: "RSS Feed" }],
			},
		},
	};
};
