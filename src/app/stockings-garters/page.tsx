import { StockingsGartersPage } from '@/modules/stockings-garters'
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Amare — Чулки и подвязки. Азбука отношений",
	description: "Онлайн курс-практикум о том как стать такой женщиной, которую боятся обидеть и потерять."
};

export default function StockingsGarters() {
	return <StockingsGartersPage />
}