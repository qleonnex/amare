import { Metadata } from "next"

import { Info, ToMarafon } from './components'

import { Hero } from "./sections/hero"
import { Presenter } from './sections/presenter'
import { Program } from './sections/program'
import { Results } from './sections/results'
import { Useful } from './sections/useful'

export const metadata: Metadata = {
	title: "Amare | Как найти своего мужчину. Причины одиночества",
};

export const RelationshipPage = () => {
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
			<Results/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
			<Presenter/>
			<Info className="-mt-10"/>
			<div className="flex justify-center mt-6">
				<ToMarafon variant="light"/>
			</div>
		</div>
	);
}