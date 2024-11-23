
import { Container } from '@/components/shared/container'
import { Title } from '@/components/ui/title'
import cs from "./style.module.css"

export const AboutCourse = () => {
	return (
		<Container>
			<div className={cs.about_course}>
				<Title>О курсе</Title>
				<p>
					Этот курс «Путеводитель настоящей леди» подойдет женщинам, которые сталкиваются с различными проблемами в отношениях и хотят изменить свою жизнь, выйти на новый уровень личного счастья и уверенности, также которые устали страдать в отношениях и хотят стать сильными, уверенными в себе, любимыми и счастливыми.
				</p>
			</div>
		</Container>
	);
}