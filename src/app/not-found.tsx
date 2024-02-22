"use client";
import { generateMetadata } from "@/libs/generateMetadata";
import Link from "next/link";

export const metadata = generateMetadata("404");

export default function NotFound() {
	return (
		<div className=" text-center rounded-3xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg backdrop-filter w-full max-w-4xl md:w-4xl p-6">
			<p className="text-3xl font-extrabold my-4">404 Not Found</p>
			<Link
				href="/"
				className="rounded-3xl bg-primary dark:bg-primary/80 dark:text-gray-300 hover:opacity-90 text-white  px-4 py-2 my-4">
				返回首页
			</Link>
		</div>
	);
}
