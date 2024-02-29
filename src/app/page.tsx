import { generateMetadata } from "@/libs/generateMetadata";
import PostListPage from "./[currentPage]/page";

export const metadata = generateMetadata();

export default async function HomePage() {
	return <PostListPage params={{ currentPage: 1 }} />;
}
