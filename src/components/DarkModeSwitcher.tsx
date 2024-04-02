"use client";
import { darkMode } from "@/libs/darkMode";
import {
	faCircleHalfStroke,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai/react";

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
				setTheme("light");
				break;
			case "light":
				setTheme("dark");
				break;
			case "dark":
				setTheme("auto");
				break;
		}
	};
	return (
		<button
			className="text-3xl align-baseline hover:opacity-80 w-8"
			onClick={handler}
			title={`切换深色模式状态（当前：${getDarkModeAlt(theme)}）`}>
			<FontAwesomeIcon icon={getDarkModeIcon(theme)} />
		</button>
	);
}
