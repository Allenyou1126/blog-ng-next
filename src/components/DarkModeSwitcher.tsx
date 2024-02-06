"use client";
import { darkMode } from "@/libs/darkMode";
import {
	faCircleHalfStroke,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai/react";
import { useEffect } from "react";

function getDarkModeAlt(mode: "auto" | "light" | "dark") {
	switch (mode) {
		case "auto":
			return "跟随系统";
		case "light":
			return "默认浅色";
		case "dark":
			return "默认深色";
	}
}

function getDarkModeIcon(mode: "auto" | "light" | "dark") {
	switch (mode) {
		case "auto":
			return faCircleHalfStroke;
		case "light":
			return faSun;
		case "dark":
			return faMoon;
	}
}

export default function DarkModeSwitcher() {
	const [theme, setTheme] = useAtom(darkMode);
	const handler = () => {
		switch (theme) {
			case "auto":
				localStorage.setItem("dark-mode", "light");
				setTheme("light");
				break;
			case "light":
				localStorage.setItem("dark-mode", "dark");
				setTheme("dark");
				break;
			case "dark":
				localStorage.setItem("dark-mode", "follow");
				setTheme("auto");
				break;
		}
	};
	useEffect(() => {
		var local_: string | null = localStorage.getItem("dark-mode");
		var stat: "light" | "dark" | "auto" = "auto";
		switch (local_) {
			case "follow":
				stat = "auto";
				break;
			case "dark":
				stat = "dark";
				break;
			case "light":
				stat = "light";
				break;
			default:
				localStorage.setItem("dark-mode", "follow");
				stat = "auto";
		}
		setTheme(stat);
	});
	return (
		<button
			className="text-3xl align-baseline hover:opacity-80 w-8"
			onClick={handler}
			title={`切换深色模式状态（当前：${getDarkModeAlt(theme)}）`}>
			<FontAwesomeIcon icon={getDarkModeIcon(theme)} />
		</button>
	);
}
