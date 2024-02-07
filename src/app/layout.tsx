"use client";
import "./globals.css";
import { useAtomValue } from "jotai/react";
import { darkMode } from "@/libs/darkMode";
import { useEffect, useState } from "react";
import { connectString } from "@/libs/connectString";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import mediumZoom from "medium-zoom";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const theme = useAtomValue(darkMode);
	const [dark, setDark] = useState(false);
	useEffect(() => {
		if (theme == "dark") {
			setDark(true);
			return;
		}
		if (theme == "light") {
			setDark(false);
			return;
		}
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const callback = () => {
			setDark(media.matches);
		};
		setDark(media.matches);
		media.addEventListener("change", callback, true);
		return () => {
			media.removeEventListener("change", callback);
		};
	}, [theme]);
	useEffect(() => {
		mediumZoom(document.querySelectorAll(".zoomable"), {
			// background: "#000000 / 30",
			background: "rgb(0, 0, 0, 0.3)",
		});
	});
	return (
		<html
			lang="zh-Hans"
			className={connectString([dark ? "dark" : "", "font-crf"])}>
			<body className="dark:bg-gray-950 dark:text-gray-300/80">
				<Navigation />
				<Header />
				<div className="flex justify-center -mt-32 z-10 relative w-full gap-4">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
