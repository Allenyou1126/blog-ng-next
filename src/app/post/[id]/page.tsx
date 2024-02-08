import { Comments } from "@/components/Comments";
import { config } from "@/libs/config";
import { generateMetadata } from "@/libs/generateMetadata";
import parseMarkdown from "@/libs/parseMarkdown";
import { notFound } from "next/navigation";

export var metadata = generateMetadata(`文章`);

export async function generateStaticParams() {
	const data = await fetch(`${config.build.api}post`).then((res) => res.json());
	const total: number = data.total_page;
	var ret: { id: number }[] = [];
	for (var i: number = 1; i <= total; ++i) {
		const tmp = await fetch(`${config.build.api}post?page_num=${i}`).then(
			(res) => res.json()
		);
		ret = ret.concat(
			tmp.posts.map((post: any) => {
				return {
					id: post.id.toString(),
				};
			})
		);
	}
	return ret;
}

export default async function PostPage({
	params,
}: {
	params: {
		id: number;
	};
}) {
	const getData = async () => {
		const res = await fetch(`${config.build.api}post/${params.id}`);

		if (!res.ok) {
			notFound();
		}
		return res.json();
	};
	const data = await getData();
	const post = data.post;
	metadata = generateMetadata(post.title);
	const postContent = parseMarkdown(post.content);
	return (
		<>
			<div className="rounded-3xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg backdrop-filter w-full max-w-4xl md:w-4xl p-6 min-h-48">
				<p className="text-5xl font-bold my-2">{post.title}</p>
				<p className="opacity-60 mt-2 mb-8">
					{new Date(post.created_at.toString()).toLocaleDateString()}
				</p>
				<div className="prose prose-ay dark:prose-invert max-w-none">
					{postContent}
				</div>
				<Comments />
				{/* <WalineComments /> */}
			</div>
		</>
	);
}
