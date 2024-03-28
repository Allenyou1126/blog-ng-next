import BilibiliVideoClient from "./BilibiliVideoClient";

export default async function BilibiliVideo({
	bvid,
	cid,
}: {
	bvid: string;
	cid?: string;
}) {
	const avid = (
		await (
			await fetch(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`)
		).json()
	).avid;
	return <BilibiliVideoClient bvid={bvid} cid={cid} avid={avid} />;
}
