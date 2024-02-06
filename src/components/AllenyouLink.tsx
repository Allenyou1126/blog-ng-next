import { config } from "@/libs/config";
import Link from "next/link";

function isExternalLink(url: string): boolean {
	if (!url) {
		return false;
	}
	if (!/^(\/\/|http(s)?:)/.test(url)) return false;
	if (url.startsWith(`https://${config.blog.hostname}`)) {
		return false;
	}

	let urlObj: URL | undefined = undefined;
	try {
		urlObj = new URL(url, `https://${config.blog.hostname}`);
	} catch (e) {}
	if (typeof urlObj !== "object") return false;
	if (urlObj.origin === "null") return false;
	if (urlObj.hostname !== `${config.blog.hostname}`) return true;
	return false;
}

export default function AllenyouLink(props: JSX.IntrinsicElements["a"]) {
	var { href, ...rest } = props;

	if (href == undefined) {
		href = "";
	}

	if (isExternalLink(href)) {
		return (
			<a
				{...props}
				target="_blank"
				rel="noopener noreferrer external nofollow"
			/>
		);
	}

	return (
		<Link href={href} passHref>
			<a {...rest} />
		</Link>
	);
}
