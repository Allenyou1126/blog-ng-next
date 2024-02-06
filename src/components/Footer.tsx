import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bottom-0 relative items-center flex-col flex my-3 gap-3 justify-center w-full text-center py-4">
			<p>Copyright © 2024-{new Date().getFullYear()} 秋实-Allenyou</p>
			<p className="opacity-70">
				Powered by <Link href="https://nextjs.org">Next.JS</Link> &{" "}
				<Link href="https://tailwindcss.com">TailwindCSS</Link>
			</p>
		</footer>
	);
}
