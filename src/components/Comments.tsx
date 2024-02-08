"use client";
import dynamic from "next/dynamic";

export const Comments = dynamic(() => import("@/components/WalineComments"), {
	ssr: false,
});
