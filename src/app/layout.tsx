import "./tailwind.css";
import "./chillroundf.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import GoToTop from "@/components/GoToTop";
import MobileMenu from "@/components/MobileMenu";
import { Matomo } from "@/components/Matomo";
import { DarkModeClient } from "@/components/DarkModeClient";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-Hans" className={"font-crf scroll-smooth"}>
			<body className="dark:bg-gray-950 dark:text-gray-300/80">
				<DarkModeClient />
				<Navigation />
				<Header />
				<div className="flex justify-center -mt-32 z-10 relative w-full gap-4">
					{children}
				</div>
				<Footer />
				<GoToTop />
				<MobileMenu />
				<Matomo />
			</body>
		</html>
	);
}
