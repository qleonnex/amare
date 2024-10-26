import { Metadata } from "next"


import { OpenerProvider } from './providers/OpenerProvider'
import { TariffYProvider } from './providers/TarifYProvider'
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
import { PaymentProvider } from "@/modules/stockings-garters/providers/PaymentProvider";

export const metadata: Metadata = {
	title: "Amare | Как найти своего мужчину. Причины одиночества",
};

export const StockingsGartersPage = () => {
	return (
		<OpenerProvider>
			<PaymentProvider>
				<TariffYProvider>
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
				</TariffYProvider>
			</PaymentProvider>
		</OpenerProvider>
	);
}