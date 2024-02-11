import { TocType } from "@/libs/types";
import Link from "next/link";
import { ReactNode } from "react";
import AllenyouLink from "./AllenyouLink";

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
					<AllenyouLink href={`#${item.id}`}>{item.display}</AllenyouLink>
				</li>
			);
			return;
		}
		ret.push(
			<li key={++index}>
				<AllenyouLink href={`#${item.id}`}>{item.display}</AllenyouLink>
				{rendToc(item.child)}
			</li>
		);
	});
	return <ul className="indent-8">{ret}</ul>;
}

export default function Toc({ toc }: { toc: TocType[] }) {
	const tocContent: ReactNode = rendToc(toc);
	return (
		<div className="hidden xl:block absolute left-4 h-full">
			<div className="h-20"></div>
			<div className="sticky top-40 w-40 overflow-y-scroll overflow-x-scroll">
				{tocContent}
			</div>
		</div>
	);
}
