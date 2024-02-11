export type PostType = {
	id: number;
	title: string;
	content: string;
	description: string;
	created_at: Date;
	modified_at: Date;
};
export type LinkType = {
	title: string;
	url: string;
	description?: string;
	image?: string;
};
export type TocType = {
	display: string;
	id: string;
	level: number;
	child: TocType[];
	parent?: TocType;
};
