"use client";

import { darkMode } from "@/libs/darkMode";
import { useAtomValue } from "jotai/react";
import { useEffect } from "react";

export function DarkModeClient() {
	const theme = useAtomValue(darkMode);
	useEffect(() => {
		if (theme == "dark") {
			document.getElementsByTagName("html").item(0)?.classList.add("dark");
			return;
		}
		if (theme == "light") {
			document.getElementsByTagName("html").item(0)?.classList.remove("dark");
			return;
		}
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const callback = () => {
			if (media.matches) {
				document.getElementsByTagName("html").item(0)?.classList.add("dark");
			} else {
				document.getElementsByTagName("html").item(0)?.classList.remove("dark");
			}
		};
		callback();
		media.addEventListener("change", callback, true);
		return () => {
			media.removeEventListener("change", callback);
		};
	}, [theme]);
	return <></>;
}
