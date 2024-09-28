"use client";

import { TocType } from "@/libs/types";
import { ReactNode } from "react";

function rendToc(toc: TocType[]): ReactNode {
	if (toc.length === 0) {
		return [];
	}
	var ret: ReactNode[] = [];
	var index = 0;
	toc.forEach((item) => {
		if (item.child.length === 0) {
			ret.push(
				<li key={++index}>
					<button
						className="hover:opacity-80"
						onClick={() => {
							setTimeout(() => {
								document
									.getElementById(item.id)!
									.scrollIntoView({ block: "center" });
							}, 10);
						}}>
						{item.display}
					</button>
				</li>
			);
			return;
		}
		ret.push(
			<li key={++index}>
				<button
					className="hover:opacity-80"
					onClick={() => {
						setTimeout(() => {
							document
								.getElementById(item.id)!
								.scrollIntoView({ block: "center" });
						}, 10);
					}}>
					{item.display}
				</button>
				{rendToc(item.child)}
			</li>
		);
	});
	return <ul className="pl-8 w-full opacity-90 font-medium">{ret}</ul>;
}

export default function Toc({ toc }: { toc: TocType[] }) {
	const tocContent: ReactNode = rendToc(toc);
	return (
		<div className="hidden 2xl:block absolute left-4 h-full">
			<div className="h-40"></div>
			<div className="sticky top-28 w-80 overflow-y-auto text-wrap h-[85vh]">
				{tocContent}
			</div>
		</div>
	);
}
