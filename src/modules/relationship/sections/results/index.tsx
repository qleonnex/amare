import { Container } from "@/components/shared"
import { Card, Title } from "@/components/ui"
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
							Поймете как избавится от негативных
							сценариев и как привлекать достойных МЧ
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Научитесь входить в ресурсное состояние женственности и привлекательности
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Создадите новый образ себя для того, чтобы привлечь достойного МЧ
						</h4>
					</Card>
				</div>
			</Container>
		</div>
	);
}