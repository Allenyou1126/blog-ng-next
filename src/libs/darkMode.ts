import { atom } from "jotai";

export const darkMode = atom<"auto" | "light" | "dark">("auto");
