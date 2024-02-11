"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { atom } from "jotai";
import { useAtom } from "jotai/react";

export const mobileMenuVis = atom(false);

export default function MobileNavSwitcher() {
	const [vis, setVis] = useAtom(mobileMenuVis);
	return (
		<button
			className="text-3xl align-baseline hover:opacity-80 w-8 md:hidden"
			onClick={() => {
				setVis(true);
			}}
			title={`打开菜单`}>
			<FontAwesomeIcon icon={faBars} />
		</button>
	);
}
