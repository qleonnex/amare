import { Metadata } from "next";
import { RebootPage } from "@/modules/reboot";

export const metadata: Metadata = {
	title: "Amare — Путеводитель настоящей леди",
	description: "Путеводитель настоящей леди: Как стать магнитом для мужчин и удачно выйти за муж"
};

export default function Reboot() {
	return <RebootPage />;
}