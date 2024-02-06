import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import { ReactNode } from "react";
import slugify from "@sindresorhus/slugify";
import mdit_anchor from "markdown-it-anchor";
import mdit_mathjax from "markdown-it-mathjax";
import { Parser } from "html-to-react";

const mdit = MarkdownIt({
	highlight: (str, lang) => {
		try {
			return hljs.highlight(str, {
				language: lang,
			}).value;
		} catch (__) {}
		return "";
	},
	html: true,
})
	.use(mdit_anchor, {
		slugify: (s: string) => {
			return `content-${slugify(s)}`;
		},
	})
	.use(mdit_mathjax());

const html_parser = Parser();

function parseMarkdownToHtml(markdown: string): string {
	return mdit.render(markdown);
}

export default function parseMarkdown(
	markdown: string
): ReactNode[] | ReactNode {
	const html = parseMarkdownToHtml(markdown);
	return html_parser.parse(html);
}
