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
					<div className={cs.left}>
						<div>
							<Image
								src="/images/presenter.png"
								alt="Рина Лазар"
								width={366}
								height={375}
							/>
						</div>
						<Image
							src="/images/diplom.jpg"
							alt="Диплом об окончании Paris 5, 2005г."
							width={366}
							height={375}
						/>
					</div>
					<div className={cs.right}>
						<span>Эксперт психолог и коуч мужско-женских отношений</span>
						<h3>Родилась и выросла в Санкт-Петербурге в обычной семье. Неудачный первый брак .  Муж абьюзер . В 22 года осталась одна без денег  с маленьким ребенком. В 2000 году переехала в Париж и закончила университет Paris 5 в 2005 г по специальности психология. Сделала себя сама и более 20 лет помогаю женщинам по всему миру прийти к своей счастливой гармоничной жизни. Эта задача является моей миссией . Понимаю боль каждой женщины и считаю , что качество жизни любой женщины зависит от ее психического состояния и образа мышления. Сейчас я за мужем за французским миллионером и у меня есть все ,о чем я когда то мечтала. И любая из вас может и достойна проживать лучшую версию своей жизни. Я помогла уже сотням своих клиенток привлечь достойного партнера и обрести комфортные ,стабильные отношения. Надеюсь смогу помочь в этом и вам. Буду рада всем вам дорогие девушки.</h3>
						<p className={font.className}>- Рина Лазар</p>
					</div>
				</div>
			</Container>
		</Card>
	);
}