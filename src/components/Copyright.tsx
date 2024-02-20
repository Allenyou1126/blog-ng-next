/* eslint-disable @next/next/no-img-element */
import { config } from "@/libs/config";
import AllenyouLink from "./AllenyouLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";

export default function Copyright({
	title,
	author,
	id,
	cc,
}: {
	title: string;
	id: number;
	author?: string;
	cc?: string;
}) {
	if (cc === undefined) {
		cc = "CC BY-NC-SA 4.0";
	}
	if (author === undefined) {
		author = "秋实-Allenyou";
	}
	return (
		<div className="dark:bg-gray-600/30 bg-gray-300/30 -mx-6 mb-8 rounded-3xl p-6 relative overflow-hidden">
			<p className="text-lg font-medium">{title}</p>
			<AllenyouLink
				className="text-primary underline dark:text-primary/80"
				href={`https://${config.blog.hostname}/post/${id}`}>{`https://${config.blog.hostname}/post/${id}`}</AllenyouLink>
			<div className="mt-4 flex-row flex-nowrap justify-start gap-4 flex">
				<div>
					<p className="font-bold row-span-1">本文作者</p>
					<p className="row-span-2">{author}</p>
				</div>
				<div>
					<p className="font-bold row-span-1">授权协议</p>
					<p className="row-span-2">{cc}</p>
				</div>
			</div>
			<FontAwesomeIcon
				className="text-[180px] absolute -top-8 -right-8 opacity-30"
				icon={faCreativeCommons}
			/>
		</div>
	);
}
