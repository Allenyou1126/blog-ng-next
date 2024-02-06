import { connectString } from "@/libs/connectString";
import Link from "next/link";

export default function PageSwitcher({
	currentPage,
	totalPage,
}: {
	currentPage: number;
	totalPage: number;
}) {
	const cur: number = parseInt(currentPage.toString());
	const total: number = parseInt(totalPage.toString());
	return (
		<div
			className={connectString([
				total == 1 ? "hidden" : "",
				" relative h-12 mt-8",
			])}>
			<p className="absolute top-2/4 -translate-y-2/4 left-0 right-0 m-auto text-center text-base">{`第${cur}页，共${total}页`}</p>
			<Link
				className={connectString([
					cur == 1 ? "hidden" : "",
					"absolute left-0 px-4 py-2 rounded-3xl bg-primary text-base top-2/4 -translate-y-2/4 font-bold text-white hover:opacity-90",
				])}
				href={`/${cur - 1}`}>
				上一页
			</Link>
			<Link
				className={connectString([
					cur == total ? "hidden" : "",
					"absolute right-0 px-4 py-2 rounded-3xl bg-primary text-base top-2/4 -translate-y-2/4 font-bold text-white hover:opacity-90",
				])}
				href={`/${cur + 1}`}>
				下一页
			</Link>
		</div>
	);
}
