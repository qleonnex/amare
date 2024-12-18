import { Metadata } from "next"


import { AboutCourse } from './sections/about-course'
import { Hero } from "./sections/hero"
import { HowPass } from './sections/how-pass'
import { Modules } from './sections/modules'
import { Presenter } from './sections/presenter'
import { Problems } from './sections/problems'
import { Results } from './sections/results'
import { Reviews } from './sections/reviews'
import { Tariffs } from './sections/tariffs'
import { Useful } from './sections/useful'

export const metadata: Metadata = {
	title: "Amare | Как найти своего мужчину. Причины одиночества",
};

export const GuidebookPage = () => {
	return (
		<div>
			<Hero/>
			<Useful/>
			<AboutCourse />
			<Results />
			<Modules />
			<Reviews />
			<HowPass />
			<Presenter />
			<Tariffs />

			<Problems />
		</div>
	);
}