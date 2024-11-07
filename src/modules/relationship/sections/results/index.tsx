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
							Разберетесь в причинах, по которым вам не удается создать стабильных отношений
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Поймете как привлекать достойных мужчин,которые будут вкладываться в отношения с вами
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Войдете в ресурсное состояние женственности и привлекательности
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Создадите вокруг себя поле манкости
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Измените отношение мужчин к себе
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Запустите новый вектор развития событий для привлечения лучшего партнера в свою жизнь
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Создадите новый образ себя для того, чтобы привлечь достойного мужчину
						</h4>
					</Card>
				</div>
			</Container>
		</div>
	);
}