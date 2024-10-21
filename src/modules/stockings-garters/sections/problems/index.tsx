import { Container } from '@/components/shared/container'
import Icon from '@/components/ui/iconic'
import Link from 'next/link'
import cs from './style.module.css'

export const Problems = () => {
	return (
		<Container>
			<Link href="https://t.me/irisalika" target="_blank" className={cs.problems}>
				<span>
					Если у вас есть вопросы или сомнения по поводу тарифа, свяжись с куратором в Telegram: вас сориентируют, ответят на ваши вопросы и помогут принять решение — <span className={cs.link}>@irisalika</span>
				</span>
				<Icon className={cs.icon} path="/icons/arrow-right.svg" size="32px" />
			</Link>
		</Container>
	);
}