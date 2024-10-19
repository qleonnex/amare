import { Marck_Script } from "next/font/google"
import Image from "next/image"

import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import { Title } from '@/components/ui/title'
import cs from "./style.module.css"

const font = Marck_Script({
	weight: ["400"],
	subsets: ["cyrillic"]
})

export const Presenter = () => {
	return (
		<Card className={cs.presenter}>
			<Container>
				<Title variant="dark">
					О ведущей марафона
				</Title>
				<div className={cs.middle}>
					<Image
						src="/images/presenter.png"
						alt="Рина Лазар"
						width={366}
						height={375}
					/>
					<div className={cs.right}>
						<span>Эксперт психолог и коуч мужско-женских отношений</span>
						<h3>Живу в Париже и работаю с клиентами по всему миру. Помогаю создавать семейные пары и реанимировать уже существующие отношения</h3>
						<p className={font.className}>- Рина Лазар</p>
					</div>
				</div>
				<div className="w-full h-[1px] bg-black/10 my-[52px]"></div>
				<div className={cs.middle}>
					<Image
						src="/images/presenter-2.jpg"
						alt="Галина Морозова"
						width={366}
						height={375}
					/>
					<div className={cs.right}>
						<span>Дипломированный психолог, коуч, арт-терапевт, мастер квантовых игр</span>
						<h3>Я раскрываю секреты успешного общения с мужчинами, как всегда оставаться для него  интересной и желанной, как поддерживать страсть в отношениях и много чего интересного</h3>
						<p className={font.className}>- Галина Морозова</p>
					</div>
				</div>
			</Container>
		</Card>
	);
}