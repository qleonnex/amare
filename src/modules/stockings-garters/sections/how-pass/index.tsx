import { Container } from '@/components/shared/container'
import { Title } from '@/components/ui/title'
import cs from "./style.module.scss"

export const HowPass = () => {
	return (
		<Container>
			<div className={cs.inner}>
				<Title>Как будет проходить</Title>
				<div className={cs.cards}>
					<div className={cs.card}>
						Дистанционная учебная платформа GetCourse
						Простой, удобный и понятный интерфейс, где вся информация будет у тебя под рукой
					</div>
					<div className={cs.card}>
						Еженедельные видеоуроки продолжительностью 1.5 часа
						Теоретические блоки, отдельные практики и домашние задания для глубокого погружения в тему
					</div>
					<div className={cs.card}>
						ZOOM-встречи и чат с кураторами. Живое общение и разбор личных запросов и ситуаций онлайн, ответы на вопросы и постоянная поддержка в чате
					</div>
				</div>
			</div>
		</Container>
	);
}