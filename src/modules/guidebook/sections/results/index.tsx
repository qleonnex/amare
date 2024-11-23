import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import { Title } from '@/components/ui/title'
import cs from "./style.module.css"

export const Results = () => {
	return (
		<div className="mt-[144px]">
			<Container>
				<Title>Результаты, которые вы получите</Title>
				<div className={cs.cards}>
					<Card className={cs.card}>
						<h4>
							Освободитесь от негативных установок и семейных сценариев, мешающих вам в личной жизни
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Поймете, как развивать отношения, начиная с первых свиданий, до создания семьи
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							<b>Станете женственной и привлекательной:</b> Откроете в себе настоящую женственность, научитесь расслабляться, наслаждаться жизнью и получать удовольствие от близости с мужчиной
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							<b>Повысите свою ценность:</b> Поднимите самооценку и свою значимость в глазах партнера, научитесь тонко влиять на него, получая желаемое без давления
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							<b>Выстроите гармоничные отношения:</b> Узнаете, как строить выгодные для себя и партнёра отношения, избегая конфликтов и недопонимания, получая обоюдное удовольствие
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							<b>Избавитесь от ревности и страха потери:</b> Обретёте уверенность в себе и в отношениях, оставив позади тревожность и желание контролировать
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							<b>Получите предложение о замужестве:</b> Создадите крепкий союз, где мужчина захочет заботиться, вкладываться в отношения
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							<b>Станете финансово успешной парой:</b> Научитесь вызывать у партнера желание поддерживать вас финансово и вместе добиваться успеха
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Начнёте жить полной жизнью
						</h4>
					</Card>
				</div>
			</Container>
		</div>
	);
}