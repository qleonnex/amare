import { RebootPage } from "@/modules/reboot";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Amare — Любовь перезагрузка. От горя к радости в отношениях",
	description: "Любовь перезагрузка. От горя к радости в отношениях"
};

export default function Reboot() {
	return <RebootPage/>;
}