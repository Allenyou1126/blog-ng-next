import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		{
			pattern: /hljs+/,
		},
	],
	theme: {
		extend: {
			backgroundImage: {
				furry: "url('https://blog-oss.allenyou.top/image/658ad4c208349.png')",
			},
			height: {
				"18": "4.5rem",
			},
			width: {
				"4xl": "56rem",
			},
			colors: {
				primary: "#6db0ec",
			},
			fontFamily: {
				crf: ["ChillRoundF"],
			},
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
			typography: ({ theme }: any) => ({
				ay: {
					css: {
						"--tw-prose-links": theme("colors.primary"),
						"--tw-prose-invert-body": theme("colors.gray[200] / 80%"),
						"--tw-prose-invert-headings": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-lead": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-links": theme("colors.primary / 80%"),
						"--tw-prose-invert-bold": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-counters": theme("colors.gray[300] / 90%"),
						"--tw-prose-invert-bullets": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-hr": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-quotes": theme("colors.gray[100] / 80%"),
						"--tw-prose-invert-quote-borders": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-captions": theme("colors.gray[400] / 80%"),
						"--tw-prose-invert-code": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-pre-code": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-pre-bg": "rgb(0 0 0)",
						"--tw-prose-invert-th-borders": theme("colors.gray[300] / 80%"),
						"--tw-prose-invert-td-borders": theme("colors.gray[300] / 80%"),
					},
				},
			}),
		},
		hljs: {
			theme: "night-owl",
		},
	},
	darkMode: "class",
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwind-highlightjs"),
	],
};
export default config;
