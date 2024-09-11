"use client";

import APlayer from "aplayer-ts";
import "aplayer-ts/src/css/base.css";
import "aplayer-ts/src/css/fixed.css";
import React, { useEffect } from "react";

export default function NeteaseMusicClientInner(props: {
	url: string;
	artists: string[];
	cover: string;
	name: string;
}) {
	const containerRef = React.createRef<HTMLDivElement>();
	const ap = APlayer();
	useEffect(() => {
		ap.init({
			container: containerRef.current!,
			loop: "none",
			audio: {
				name: props.name,
				artist: props.artists.join(", "),
				url: props.url,
				cover: props.cover,
			},
			listFolded: true,
		});
	}, [containerRef, ap, props]);
	return <div ref={containerRef}></div>;
}
