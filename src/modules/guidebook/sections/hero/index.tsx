"use client"

import { Container } from '@/components/shared/container'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useContext } from 'react'
import { TariffYContext } from '@/providers/TarifYProvider'
import cs from "./style.module.css"

export const Hero = () => {
	const { positionY } = useContext(TariffYContext);

	function scrollToTarif() {
		scrollTo(0, positionY);
	}

	return (
		<Container>
			<div className={cs.hero}>
				<div className={cs.left}>
					<h1>Путеводитель настоящей леди</h1>
					<p>Он-лайн курс практикум: Как стать магнитом для мужчин и удачно выйти за муж</p>
					<Button onClick={scrollToTarif} variant="light">Перейти к тарифам</Button>
				</div>
				<Image src="/images/c-person.png" width={965} height={996} alt="Фотография девушки в чулках" />
				<Image src="/images/c-person-mobile.png" width={900} height={1238} alt="Фотография девушки в чулках" />
			</div>
		</Container>
	);
}