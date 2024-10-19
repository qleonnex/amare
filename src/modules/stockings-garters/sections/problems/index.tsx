import { Container } from '@/components/shared'
import cs from './style.module.css'

export const Problems = () => {
	return (
		<Container>
			<div className={cs.problems}>
				<span>
					Если у вас есть вопросы или сомнения по поводу тарифа, свяжись с куратором: вас сориентируют, ответят на ваши вопросы и помогут принять решение!
				</span>
			</div>
		</Container>
	);
}