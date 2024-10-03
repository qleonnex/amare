import { Metadata } from "next";
import { Hero } from "./sections/hero";
import { Useful } from "@/modules/relationship/sections/useful";
import { Program } from "@/modules/relationship/sections/program";
import { Results } from "@/modules/relationship/sections/results";
import { Presenter } from "@/modules/relationship/sections/presenter";
import { MarafonInfo } from "@/modules/relationship/components/marafon-info";

export const metadata: Metadata = {
	title: "Amare | Как найти своего мужчину. Причины одиночества",
	
};

export const RelationshipPage = () => {
	return (
		<div>
			<Hero />
			<Useful />
			<Program />
			<Results />
			<Presenter />
			<MarafonInfo />
		</div>
	);
}