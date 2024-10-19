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
							Поймете ваши ошибки при построении отношений и как их исправить
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Создадите поле гармоничных отношений  именно для вас ,которое начнет работать с вашим бессознательным
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Очистите текущие отношения от обид и негатива
						</h4>
					</Card>
					<Card className={cs.card}>
						<h4>
							Узнаете ,что действительно важно для построения стабильных и долгосрочных отношений
						</h4>
					</Card>
					<Card className={`${cs.card} col-span-2 max-sm:col-span-1`}>
						<h4>
							Создадите матрицу комфортных для вас отношений
						</h4>
					</Card>
				</div>
			</Container>
		</div>
	);
}