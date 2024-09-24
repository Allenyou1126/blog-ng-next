"use client";
import { config } from "@/libs/config";
import { useEffect, useState } from "react";

const extra_whitelist = ["127.0.0.1", "localhost"];

export default function AntiReverseProxy() {
	const [_] = useState();
	useEffect(() => {
		if (document.location.hostname === config.blog.hostname) {
			return;
		}
		if (extra_whitelist.includes(document.location.hostname)) {
			return;
		}
		alert("您目前访问的是未授权的镜像站点，站点上可能存在恶意内容。");
		document.location.host = config.blog.hostname;
	}, [_]);
	return <></>;
}
