/* eslint-disable @next/next/no-img-element */
"use client";
import { connectString } from "@/libs/connectString";
import { throttle } from "@/libs/throttle";
import Link from "next/link";
import { useEffect, useState } from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";
import getAvatar from "@/libs/getAvatar";

export default function Navigation() {
	const [shouldExpand, setShouldExpand] = useState(false);
	const handler = throttle(() => {
		const scrollTop =
			document.body.scrollTop || document.documentElement.scrollTop || 0;
		if (scrollTop > 500) {
			setShouldExpand(true);
		} else {
			setShouldExpand(false);
		}
	}, 100);
	useEffect(() => {
		setShouldExpand(
			(document.body.scrollTop || document.documentElement.scrollTop || 0) > 500
		);
		document.addEventListener("scroll", handler, true);
		return () => {
			document.removeEventListener("scroll", handler);
		};
	}, [handler, shouldExpand]);
	return (
		<nav className="fixed top-0 w-full z-20 justify-center flex bg-none">
			<div
				className={connectString([
					shouldExpand
						? "w-full top-0 rounded-none"
						: "rounded-full md:max-w-2xl w-2/3 md:w-auto top-4",
					"transistion-all transform ease-in-out duration-100",
					"h-18",
					"fixed",
					"bg-white/70",
					"dark:bg-gray-950/70",
					"backdrop-blur-3xl",
					"backdrop-filter",
					"py-2",
					"pl-2",
					"pr-4",
					"flex",
					"justify-between",
					"items-center",
					"gap-8",
				])}>
				<Link href="/">
					<img
						src={`${getAvatar("allenyou1126@gmail.com")}?s=48`}
						alt="Avatar"
						className="rounded-full"
					/>
				</Link>
				<ul className="hidden md:flex justify-center gap-8">
					<li>
						<Link href="/">首页</Link>
					</li>
					<li>
						<Link href="/friend/">友链</Link>
					</li>
					<li>
						<Link href="/board/">留言</Link>
					</li>
					<li>
						<Link href="/about/">关于</Link>
					</li>
				</ul>
				<DarkModeSwitcher />
			</div>
		</nav>
	);
}
