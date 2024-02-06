import { config } from "./config";

export const generateMetadata = (subtitle: string = "") => {
	var title = config.blog.title;
	if (subtitle != "") {
		title = `${subtitle} - ${title}`;
	}
	return {
		description: config.blog.description,
		title,
	};
};
