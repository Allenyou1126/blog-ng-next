"use client";

import dynamic from "next/dynamic";

export const NeteaseMusicClient = dynamic(
	() => import("@/components/MarkdownExtend/NeteaseMusicClientInner"),
	{ ssr: false }
);
