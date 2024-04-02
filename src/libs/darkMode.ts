import { atomWithStorage } from "jotai/utils";

export const darkMode = atomWithStorage<"auto" | "light" | "dark">(
	"dark-mode",
	"auto"
);
