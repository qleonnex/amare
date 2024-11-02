import { Metadata } from "next"

import { Info, ToMarafon } from './components'

import { Hero } from "./sections/hero"
import { Presenter } from './sections/presenter'
import { Results } from './sections/results'
import { Useful } from './sections/useful'
import { Reviews } from "./sections/reviews";
import { OpenerProvider } from "@/providers/OpenerProvider";

export const metadata: Metadata = {
	title: "Amare | Как найти своего мужчину. Причины одиночества",
};

export const RelationshipPage = () => {
	return (
		<OpenerProvider>
			<Hero/>
			<Useful/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
			<Reviews />
			<div className="flex justify-center mt-14">
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
		</OpenerProvider>
	);
}