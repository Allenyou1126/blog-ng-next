import Link from "next/link";
import AllenyouLink from "./AllenyouLink";

export default function Footer() {
	return (
		<footer className="bottom-0 relative items-center flex-col flex my-3 gap-3 justify-center w-full text-center py-4">
			<p>Copyright © 2024-{new Date().getFullYear()} 秋实-Allenyou</p>
			<p className="opacity-70">
				Powered by{" "}
				<AllenyouLink href="https://nextjs.org">Next.JS</AllenyouLink> &{" "}
				<AllenyouLink href="https://tailwindcss.com">TailwindCSS</AllenyouLink>
			</p>
			<div className="opacity-70 flex flex-row flex-nowrap gap-8">
				<AllenyouLink className="block" href="/feed/">
					RSS Feed
				</AllenyouLink>
				<AllenyouLink className="block" href="/sitemap/">
					Sitemap
				</AllenyouLink>
			</div>
		</footer>
	);
}
