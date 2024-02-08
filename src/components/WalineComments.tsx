"use client";

import React, { useEffect, useRef } from "react";
import { type WalineInstance, init } from "@waline/client";
import "@/app/waline.css";

import { config } from "@/libs/config";
import { hljs } from "@/libs/parseMarkdown";
import { usePathname } from "next/navigation";

export default function WalineComments(props: any) {
	const walineInstanceRef = useRef<WalineInstance | null>(null);
	const containerRef = React.createRef<HTMLDivElement>();
	const path = usePathname();
	useEffect(() => {
		walineInstanceRef.current = init({
			...props,
			path,
			el: containerRef.current,
			serverURL: config.comment.api,
			lang: "zh",
			emoji: [],
			dark: "html.dark",
			requiredMeta: ["nick", "mail"],
			login: "disable",
			highlighter: hljs,
			texRenderer: false,
			search: false,
			copyright: false,
		});

		return () => walineInstanceRef.current?.destroy();
	}, [containerRef, props, path]);

	useEffect(() => {
		walineInstanceRef.current?.update(props);
	}, [props]);

	return <div ref={containerRef} />;
}
