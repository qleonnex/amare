import { Metadata } from "next";
import { GuidebookPage } from "@/modules/guidebook";

export const metadata: Metadata = {
	title: "Amare — Любовь перезагрузка. От горя к радости в отношениях",
	description: "Он-лайн курс практикум: Как стать магнитом для мужчин и удачно выйти за муж."
};

export default function Guidebook() {
	return <GuidebookPage/>;
}