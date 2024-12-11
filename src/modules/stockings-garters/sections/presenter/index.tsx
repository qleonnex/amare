import Image from "next/image"

import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import { Title } from '@/components/ui/title'
import cs from "./style.module.scss"

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
						<span>Дипломированный, практикующий психолог и коуч мужско-женских отношений, выпускница университета Paris 5 в 2005г.</span>
						<h3>По специальности «Психология». Опыт работы более 20 лет. Помогаю клиентам по всему миру мужчинам и женщинам создавать стабильные, комфортные, гармоничные отношения и реанимировать уже существующие. Более 1000 довольных клиентов. Понимаю боль каждой женщины и считаю, что качество жизни зависит от психического состояния и образа мышления.</h3>
						<p>- Рина Лазар</p>
					</div>
				</div>
				<span className="block w-full h-[1px] bg-black/5 my-10"></span>
				<div className={cs.middle}>
					<div className={cs.left}>
						<div>
							<Image
								src="/images/presenter-2.jpg"
								alt="Рина Лазар"
								width={366}
								height={375}
							/>
						</div>
					</div>
					<div className={cs.right}>
						<span>Дипломированный психолог, коуч, арт-терапевт, мастер квантовых игр</span>
						<h3>Я раскрываю секреты успешного общения с мужчинами, как всегда оставаться для него интересной и желанной, как поддерживать страсть в отношениях и много чего интересного</h3>
						<p>- Галина Морозова</p>
					</div>
				</div>
			</Container>
		</Card>
	);
}