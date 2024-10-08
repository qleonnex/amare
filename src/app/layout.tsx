import type { ReactNode } from "react";
import { RelationshipLayout } from "@/components/layouts/relationship";
import "../assets/global.css";
import { Cormorant } from "next/font/google";
import { Metadata } from "next";

const font = Cormorant({
	weight: ["400", "500", "600"],
	subsets: ["latin", "cyrillic"]
})

export const metadata: Metadata = {
	title: 'Amare — Академия психологии устройчивых отношений',
	description: 'Академия психологии устройчивых отношений. Знакомства, брак, семья',
	keywords: ["Почему не складываются отношения с мужчинами", "Почему привлекаются неподходящие мужчины", "Как построить стабильные отношения", "Как найти подходящего партнера для брака", "Психология выбора партнера", "Причины неудач в отношениях", "Советы для создания крепких отношений", "Как выйти замуж и создать семью", "Почему не складываются долгосрочные отношения", "Ошибки в отношениях с мужчинами"],
	robots: {
		follow: true,
		index: true
	}
}

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html>
			<head>
				<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link rel="icon" href="/icons/logo.svg" type="image/svg+xml"/>
			</head>
			<body className={font.className}>
				<RelationshipLayout>
					{children}
				</RelationshipLayout>
			</body>
		</html>
	);
}