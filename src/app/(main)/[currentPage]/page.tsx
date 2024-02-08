import { generateMetadata } from "@/libs/generateMetadata";
import PostList from "@/components/PostList";
import { config } from "@/libs/config";

export var metadata = generateMetadata(`文章列表 - 第1页`);

export async function generateStaticParams() {
	const data = await fetch(`${config.build.api}post`).then((res) => res.json());
	const total: number = data.total_page;
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