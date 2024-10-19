"use client"

import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/iconic'
import { Title } from '@/components/ui/title'
import { useSlider } from './hook'
import cs from "./style.module.css"



export const Modules = () => {
	const { stage, MODULES, handleNext, handlePrevious } = useSlider();

	return (
		<Container>
			<div className={cs.container_modules}>
				<Title>Программа курса</Title>
				<div className={cs.modules}>
					<div className={cs.slider}>
						<Card className={cs.module}>
							{MODULES[stage]}
						</Card>
					</div>
					<div className={cs.bottom}>
						<button onClick={handlePrevious} disabled={stage < 1}>
							<Icon path="/icons/arrow-left.svg" width="38px" height="38px" />
						</button>
						<span>{stage + 1} модуль</span>
						<button onClick={handleNext} disabled={stage + 1 === 12}>
							<Icon path="/icons/arrow-right.svg" width="38px" height="38px" />
						</button>
					</div>
				</div>
			</div>
		</Container>
	);
}