import { RelationshipLayout } from "@/components/layouts/relationship"
import { Metadata } from "next"
import { Cormorant } from "next/font/google"
import Script from 'next/script'
import type { ReactNode } from "react"
import "../assets/global.css"

const font = Cormorant({
	weight: ["400", "500", "600"],
	subsets: ["latin", "cyrillic"]
})

export const metadata: Metadata = {
	title: 'Amare — Академия психологии устойчивых отношений',
	description: 'Академия психологии устойчивых отношений. Знакомства, брак, семья',
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
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
			</head>
			<body className={font.className}>
				<RelationshipLayout>
					{children}
				</RelationshipLayout>

				<Script
					id="facebook-pixel"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							!function(f,b,e,v,n,t,s)
							{if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
								n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
							if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
							n.queue=[];t=b.createElement(e);t.async=!0;
							t.src=v;s=b.getElementsByTagName(e)[0];
							s.parentNode.insertBefore(t,s)}(window,document,'script',
							'https://connect.facebook.net/en_US/fbevents.js');
							fbq('init', '1046635170348020');
							fbq('track', 'PageView');
						`,
					}}
				/>
				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: 'none' }}
						src="https://www.facebook.com/tr?id=1046635170348020&ev=PageView&noscript=1"
					/>
				</noscript>
			</body>
		</html>
	)
}