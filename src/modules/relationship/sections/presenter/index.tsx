import { Container } from "@/components/shared"
import { Card, Title } from "@/components/ui"
import { Marck_Script } from "next/font/google"
import Image from "next/image"

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
			</Container>
		</Card>
	);
}