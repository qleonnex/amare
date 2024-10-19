import { Metadata } from "next"


import { AboutCourse } from './sections/about-course'
import { Hero } from "./sections/hero"
import { Modules } from './sections/modules'
import { Problems } from './sections/problems'
import { Reviews } from './sections/reviews'
import { Useful } from './sections/useful'

export const metadata: Metadata = {
	title: "Amare | Как найти своего мужчину. Причины одиночества",
};

export const StockingsGartersPage = () => {
	return (
		<div>
			<Hero/>
			<Useful/>
			<AboutCourse />
			<Modules />
			<Reviews />

			<Problems />
		</div>
	);
}