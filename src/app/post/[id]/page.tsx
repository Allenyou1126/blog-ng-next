import { Comments } from "@/components/Comments";
import Copyright from "@/components/Copyright";
import OutdateTip from "@/components/OutdateTip";
import Toc from "@/components/Toc";
import { initCMS } from "@/libs/contents";
import { generateMetadata } from "@/libs/generateMetadata";
import parseMarkdown, { parseToc } from "@/libs/parseMarkdown";
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
	const toc = parseToc(post.content);
	return (
		<>
			<div className="rounded-3xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg backdrop-filter w-full max-w-4xl mx-auto md:w-4xl p-6 min-h-48">
				<p className="text-3xl font-bold my-2">{post.title}</p>
				<p className="opacity-60 my-2">
					{post.created_at.toLocaleDateString()}
				</p>
				<OutdateTip created={post.modified_at.toDateString()} />
				<div className="prose prose-ay dark:prose-invert max-w-4xl break-all my-8">
					{postContent}
				</div>
				<Copyright title={post.title} id={params.id} />
				<Comments />
			</div>
			<Toc toc={toc} />
		</>
	);
}
