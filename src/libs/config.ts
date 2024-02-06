export const config = {
	blog: {
		hostname: "blog-ng.allenyou.wang",
		title: `秋实-Allenyou的小窝`,
		description: "稻花香里说丰年，听取WA声一片",
	},
	build: {
		api:
			process.env.API != undefined
				? process.env.API
				: "http://127.0.0.1:5000/api/",
	},
	gravatar_mirror: "https://blog-oss.allenyou.top/avatar/",
};
