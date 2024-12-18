"use client"

import { Container } from '@/components/shared/container'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useContext } from 'react'
import { TariffYContext } from '@/providers/TarifYProvider'
import cs from "./style.module.scss"

export const Hero = () => {
	const { positionY } = useContext(TariffYContext);

	function scrollToTarif() {
		scrollTo(0, positionY);
	}

	return (
		<Container>
			<div className={cs.hero}>
				<div className={cs.left}>
					<h1>Чулки и подвязки. <br/> Азбука отношений</h1>
					<p>Онлайн курс-практикум о том как стать такой женщиной, которую боятся обидеть и потерять. В этом курсе вы научитесь выстраивать отношения с мужчиной, где вы будете чувствовать себя желанной и любимой</p>
					<Button onClick={scrollToTarif} variant="light">Перейти к тарифам</Button>
				</div>
				<Image src="/images/c-person.png" width={965} height={996} alt="Фотография девушки в чулках" />
				<Image src="/images/c-person-mobile.png" width={900} height={1238} alt="Фотография девушки в чулках" />
			</div>
		</Container>
	);
}