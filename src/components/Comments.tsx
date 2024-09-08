"use client";
import dynamic from "next/dynamic";
import { Loading } from "./Loading";

export const Comments = dynamic(() => import("@/components/WalineComments"), {
	ssr: false,
	loading: () => {
		return <CommentsLoading />;
	},
});

export function CommentsLoading() {
	return (
		<>
			<div className="w-full flex justify-center items-center flex-col gap-4">
				<Loading />
				<p className="font-bold text-xl">加载评论中……</p>
			</div>
		</>
	);
}
