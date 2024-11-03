import { RelationshipPage } from "@/modules/relationship";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Amare — Как найти своего мужчину и стать той женщиной, которую боятся потерять",
	description: "Как найти своего мужчину и стать той женщиной, которую боятся потерять"
};

export default function Relationship() {
	return <RelationshipPage/>;
}