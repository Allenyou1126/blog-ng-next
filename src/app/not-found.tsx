"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { connectString } from "@/libs/connectString";
import { darkMode } from "@/libs/darkMode";
import { generateMetadata } from "@/libs/generateMetadata";
import { useAtomValue } from "jotai";
import Link from "next/link";

export const metadata = generateMetadata("404");

export default function NotFound() {
	return (
		<div className=" text-center rounded-3xl bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg backdrop-filter w-full max-w-4xl md:w-4xl p-6">
			<p className="text-3xl font-extrabold my-4">404 Not Found</p>
			<Link
				href="/"
				className="rounded-3xl bg-primary dark:bg-primary/80 dark:text-gray-300 dark:hover:text-gray-300/80 text-white hover:text-gray-100 px-4 py-2 my-4">
				返回首页
			</Link>
		</div>
	);
}
