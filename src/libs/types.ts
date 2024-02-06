export type PostType = {
	id: number;
	title: string;
	content: string;
	description: string;
	created_at: string;
	modified_at: string;
};
export type LinkType = {
	id: number;
	title: string;
	url: string;
	description?: string;
	image?: string;
};
