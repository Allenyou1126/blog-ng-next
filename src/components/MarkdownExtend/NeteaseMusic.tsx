import { NeteaseMusicClient } from "./NeteaseMusicClient";
import MusicApi from "@suen/music-api";

export default async function NeteaseMusic({ id }: { id: number }) {
	const detail = await MusicApi.getSongDetail("netease" as MusicApi.vendor, id);
	if (!detail.status) {
		throw new Error("Failed to get music.");
	}
	const url = await MusicApi.getSongUrl("netease" as MusicApi.vendor, id);
	if (!url.status) {
		throw new Error("Failed to get music.");
	}
	return (
		<NeteaseMusicClient
			cover={detail.data.album.cover}
			name={detail.data.name}
			artists={detail.data.artists.map((v) => {
				return v.name;
			})}
			url={url.data.url}
		/>
	);
}
