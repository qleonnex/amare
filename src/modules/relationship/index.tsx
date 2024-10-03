import { Metadata } from "next";
import { Hero } from "./sections/hero";
import { Useful } from "@/modules/relationship/sections/useful";
import { Program } from "@/modules/relationship/sections/program";
import { Results } from "@/modules/relationship/sections/results";
import { Presenter } from "@/modules/relationship/sections/presenter";
import { Info } from "@/modules/relationship/sections/info";
import { ToMarafon } from "@/modules/relationship/sections/hero/components/to-marafon";

export const metadata: Metadata = {
	title: "Amare | Как найти своего мужчину. Причины одиночества",
	
};

export const RelationshipPage = () => {
	return (
		<div>
			<Hero/>
			<Info className="-mb-10"/>
			<Useful/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
			<Program/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
			<Results/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
			<Presenter/>
			<Info className="-mt-10"/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
			{/*<MarafonInfo />*/}
		</div>
	);
}