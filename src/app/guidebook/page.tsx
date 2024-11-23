import { Metadata } from "next";
import { GuidebookPage } from "@/modules/guidebook";

export const metadata: Metadata = {
	title: "Amare — Любовь перезагрузка. От горя к радости в отношениях",
	description: "Любовь перезагрузка. От горя к радости в отношениях"
};

export default function Guidebook() {
	return <GuidebookPage/>;
}