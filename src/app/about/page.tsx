import { generateMetadata } from "@/libs/generateMetadata";
import parseMarkdown from "@/libs/parseMarkdown";
import { readFile } from "fs/promises";
import path from "path";

export const metadata = generateMetadata("关于");

export default async function AboutPage() {
	const getContent = async () => {
		const res = await readFile(
			path.join(process.cwd(), "src", "data", "pages", "about.md")
		);
		return res.toString();
	};
	const content = await getContent();
	const postContent = parseMarkdown(content);
	return (
		<div className="rounded-3xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg backdrop-filter w-full max-w-4xl md:w-4xl p-6 min-h-48">
			<p className="text-5xl font-bold mt-2 mb-8">关于</p>
			<div className="prose prose-ay dark:prose-invert max-w-none">
				{postContent}
			</div>
		</div>
	);
}
