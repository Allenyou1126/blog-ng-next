import { config } from "@/libs/config";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-primary bg-furry h-[calc(65lvh+8rem)] min-h-[30rem] bg-cover bg-top flex flex-col z-0">
			<div className="flex-auto relative">
				<div className="absolute -translate-x-2/4 left-2/4 bottom-10 w-full max-w-4xl text-white px-5 md:px-6 drop-shadow-xl">
					<h1 className="text-4xl leading-normal font-bold drop-shadow-xl">
						<Link href="/">{config.blog.title}</Link>
					</h1>
					<p className="text-base leading-normal mt-1 drop-shadow-xl">
						{config.blog.description}
					</p>
				</div>
			</div>
			<div className="flex-none h-32 w-full bg-gradient-to-b from-transparent to-white dark:to-gray-950"></div>
		</header>
	);
}
