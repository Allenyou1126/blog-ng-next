import { generateMetadata } from "@/libs/generateMetadata";
import PostList from "@/components/PostList";
import { initCMS } from "@/libs/contents";

export var metadata = generateMetadata(`文章列表 - 第1页`);

export async function generateStaticParams() {
	const cms = initCMS();
	const total: number = Math.ceil(cms.postIds.length / 10);
	var ret = [];
	for (var i: number = 1; i <= total; ++i) {
		ret.push({
			currentPage: i.toString(),
		});
	}
	return ret;
}

export default async function PostListPage({
	params,
}: {
	params: {
		currentPage: number;
	};
}) {
	metadata = generateMetadata(`文章列表 - 第${params.currentPage}页`);
	return (
		<div className="rounded-3xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg backdrop-filter w-full max-w-4xl md:w-4xl p-6 min-h-48">
			<PostList page={params.currentPage} />
		</div>
	);
}
