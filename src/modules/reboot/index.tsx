import { Metadata } from "next";
import { Hero } from "./sections/hero";
import { Useful } from "@/modules/reboot/sections/useful";
import { Program } from "@/modules/reboot/sections/program";
import { Presenter } from "@/modules/reboot/sections/presenter";
import { Info } from "@/modules/reboot/sections/info";
import { ToMarafon } from "@/modules/reboot/components/to-marafon";
import { Results } from "@/modules/reboot/sections/results";

export const metadata: Metadata = {
	title: "Amare | Как найти своего мужчину. Причины одиночества",
	
};

export const RebootPage = () => {
	return (
		<div>
			<Hero/>
			<Useful/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
			<Program/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
			<Results />
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