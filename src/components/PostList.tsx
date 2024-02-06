import { PostType } from "@/libs/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageSwitcher from "./PageSwitcher";
import { config } from "@/libs/config";

export default async function PostList({ page }: { page: number }) {
	const getData = async () => {
		const res = await fetch(
			`${config.build.api}post?page_size=10&page_num=${page}`
		);

		if (!res.ok) {
			notFound();
		}
		return res.json();
	};
	const data = await getData();
	const posts: PostType[] = await data.posts;
	const postList = posts.map((post, index) => {
		return (
			<div key={index} className="mb-8">
				<Link
					className="text-primary font-bold text-2xl my-4 hover:text-primary/80"
					href={`/post/${post.id}`}>
					{post.title}
				</Link>
				<p className="opacity-60 my-4">
					{new Date(post.created_at).toLocaleDateString()}
				</p>
				<p className="my-4">{post.description}</p>
			</div>
		);
	});
	return (
		<>
			{postList}
			<PageSwitcher currentPage={page} totalPage={data.total_page} />
		</>
	);
}
