import { Comments } from "@/components/Comments";
import { initCMS } from "@/libs/contents";
import { generateMetadata } from "@/libs/generateMetadata";
import parseMarkdown from "@/libs/parseMarkdown";
import { notFound } from "next/navigation";

export var metadata = generateMetadata(`文章`);

export async function generateStaticParams() {
	const cms = initCMS();
	return cms.postIds.map((i) => {
		return {
			id: i.toString(),
		};
	});
}

export default async function PostPage({
	params,
}: {
	params: {
		id: number;
	};
}) {
	const cms = initCMS();
	const post = cms.getPost(params.id);
	if (post === undefined) {
		notFound();
	}
	metadata = generateMetadata(post.title);
	const postContent = parseMarkdown(post.content);
	return (
		<>
			<div className="rounded-3xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg backdrop-filter w-full max-w-4xl md:w-4xl p-6 min-h-48">
				<p className="text-5xl font-bold my-2">{post.title}</p>
				<p className="opacity-60 mt-2 mb-8">
					{post.created_at.toLocaleDateString()}
				</p>
				<div className="prose prose-ay dark:prose-invert max-w-none">
					{postContent}
				</div>
				<Comments />
			</div>
		</>
	);
}
