import { Cormorant } from "next/font/google"

import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import { Title } from '@/components/ui/title'
import cs from "./style.module.css"

const font = Cormorant({
	weight: ["500"],
	subsets: ["cyrillic"]
})

export const Program = () => {
	return (
		<Container>
			<div className={cs.inner}>
				<Title>Программа марафона</Title>
				<div className={cs.cards}>
					<Card className={`${cs.card} ${cs.line_f}`}>
						<span className={font.className}>1 день марафона</span>
						<div className={cs.card_main}>
							<ul>
								<li>Почему мы испытываем боль, когда отношения разваливаются и от чего это зависит</li>
								<li>Что необходимо понимать при построении долгосрочных комфортных отношений</li>
								<li>Мифы об отношениях и  любви</li>
							</ul>
							<div className={cs.card_practic}>
								<p>Практика</p>
								<ul>
									<li>«Мой мир» — для определения к какому типу отношений  склонны именно вы</li>
									<li>Создание поля отношений, который сделает вас счастливой</li>
								</ul>
							</div>
						</div>
					</Card>
					<Card className={`${cs.card} ${cs.line_s}`}>
						<span className={font.className}>2 день марафона</span>
						<div className={cs.card_main}>
							<ul>
								<li>8 основных причин, почему отношения не складываются</li>
								<li>Парадокс любви или как мы создаем себе в отношениях то, что не хотим</li>
							</ul>
							<div className={cs.card_practic}>
								<p>Практика</p>
								<ul>
									<li>Очищение любви</li>
								</ul>
							</div>
						</div>
					</Card>
					<Card className={cs.card}>
						<span className={font.className}>3 день марафона</span>
						<div className={cs.card_main}>
							<ul>
								<li>Что действительно важно для долгосрочных отношений</li>
								<li>С чем у вас проблемы и как это исправить</li>
								<li>Выясняем, что нужно сделать, что бы ваши отношения были гармоничны</li>
							</ul>
							<div className={cs.card_practic}>
								<p>Практика</p>
								<ul>
									<li>Создание матрицы отношений, в которых вам будет комфортно</li>
								</ul>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</Container>
	);
}