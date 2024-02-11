import { TocType } from "@/libs/types";
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
					<AllenyouLink className="hover:opacity-80" href={`#${item.id}`}>
						{item.display}
					</AllenyouLink>
				</li>
			);
			return;
		}
		ret.push(
			<li key={++index}>
				<AllenyouLink className="hover:opacity-80" href={`#${item.id}`}>
					{item.display}
				</AllenyouLink>
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
			<div className="sticky top-40 w-80 overflow-y-scroll text-wrap">
				{tocContent}
			</div>
		</div>
	);
}
