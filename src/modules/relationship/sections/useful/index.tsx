import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import { Title } from '@/components/ui/title'
import cs from "./style.module.css"
import { Info } from "@/modules/relationship/components";

export const Useful = () => {
	return (
		<Card className={cs.useful}>
			<Info />
			<Container>
				<div className={cs.inner}>
					<Title variant="dark">Кому особенно будет полезен марафон</Title>
					<ul>
						<li>Негативный прошлый опыт в отношениях</li>
						<li>Отношения с мужчиной краткосрочные, либо заканчиваются после секса</li>
						<li>Страх новых отношений</li>
						<li>Чувство одиночества и усталости, плохой сон и тревога за будущее</li>
						<li>Отношения с мужчиной краткосрочные, либо заканчиваются после секса</li>
						<li>Привлекаете мужчин, которые ведут себя капризно или пытаются доминировать</li>
						<li>Хотите привлекать достойных мужчин</li>
						<li>Чувствовать себя в отношениях защищенной и любимой</li>
						<li>Получать внимание, заботу, подарки и финансовые вложения от мужчин</li>
						<li>Вы успешны в карьере, ведете активный образ жизни, но не понимаете как выйти за муж</li>
					</ul>
				</div>
			</Container>
		</Card>
	);
}