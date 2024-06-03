"use client";
import { mobileMenuVis } from "./MobileMenuSwitcher";
import { useAtom } from "jotai/react";
import { connectString } from "@/libs/connectString";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import AllenyouLink from "./AllenyouLink";

export default function MobileMenu() {
	const [vis, setVis] = useAtom(mobileMenuVis);
	return (
		<div
			className={connectString([
				vis
					? "visible translate-y-0 opacity-100 transition-all"
					: "invisible -translate-y-full opacity-0",
				"md:hidden",
				"transition-all duration-300",
				"bg-white dark:bg-gray-950",
				"backdrop-blur-3xl backdrop-filter",
				"z-50 fixed h-full top-0 bottom-0 w-full",
				"p-4",
			])}>
			<p className="text-3xl align-baseline font-bold absolute top-4 left-4">
				这是一个菜单
			</p>
			<button
				className="text-3xl align-baseline hover:opacity-80 w-8 absolute top-4 right-4"
				onClick={() => {
					setVis(false);
				}}
				title={`打开菜单`}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
			<ul className="text-3xl text-primary mt-40 flex flex-col gap-12">
				<li>
					<AllenyouLink className="hover:opacity-80" href="/">
						首页
					</AllenyouLink>
				</li>
				<li>
					<AllenyouLink className="hover:opacity-80" href="/friend/">
						友链
					</AllenyouLink>
				</li>
				<li>
					<AllenyouLink className="hover:opacity-80" href="/board/">
						留言
					</AllenyouLink>
				</li>
				<li>
					<AllenyouLink className="hover:opacity-80" href="/about/">
						关于
					</AllenyouLink>
				</li>
				<li>
					<AllenyouLink
						className="hover:opacity-80"
						href="https://www.travellings.cn/go.html">
						开往
					</AllenyouLink>
				</li>
			</ul>
			<p className="text-xl align-baseline absolute bottom-4 left-4">
				Copyright © 2024-{new Date().getFullYear()} 秋实-Allenyou
			</p>
		</div>
	);
}
