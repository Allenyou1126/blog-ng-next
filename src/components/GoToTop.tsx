"use client";
import { connectString } from "@/libs/connectString";
import { throttle } from "@/libs/throttle";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function GoToTop() {
	const [vis, setVis] = useState(false);
	const handler = throttle(() => {
		const scrollTop =
			document.body.scrollTop || document.documentElement.scrollTop || 0;
		if (scrollTop > 500) {
			setVis(true);
		} else {
			setVis(false);
		}
	}, 100);
	useEffect(() => {
		setVis(
			(document.body.scrollTop || document.documentElement.scrollTop || 0) > 500
		);
		document.addEventListener("scroll", handler, true);
		return () => {
			document.removeEventListener("scroll", handler);
		};
	}, [handler, vis]);
	return (
		<button
			title="Go to Top"
			className={connectString([
				"block z-50 fixed bottom-4 right-4 rounded-2xl hover:opacity-80 border-2 border-opacity-60 bg-white dark:bg-gray-950 dark:text-gray-300/80 transition-opacity duration-200 items-center text-center p-4 shadow-3xl",
				vis ? "opacity-100" : "opacity-0 invisible",
			])}
			onClick={() => {
				window.scrollTo({
					left: 0,
					top: 0,
					behavior: "smooth",
				});
			}}>
			<FontAwesomeIcon icon={faChevronUp} className="text-3xl" />
		</button>
	);
}
