import { Cormorant } from "next/font/google"

import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import { Title } from '@/components/ui/title'
import cs from "./style.module.css"

const font = Cormorant({
	weight: ["500"],
	subsets: ["cyrillic"]
})

export const Program = () => {
	return (
		<Container>
			<div className={cs.inner}>
				<Title>Программа марафона</Title>
				<div className={cs.cards}>
					<Card className={`${cs.card} ${cs.line_f}`}>
						<span className={font.className}>1 день марафона</span>
						<div className={cs.card_main}>
							<ul>
								<li>В чем причина одиночества и почему ты до сих пор одна</li>
								<li>Почему ты выбираешь не тех мужчин</li>
								<li>Как избавиться от негативных установок и убеждений</li>
								<li>Как прошлый негативный опыт влияет на твою жизнь</li>
								<li>Какой мужчина нужен именно тебе</li>
								<li>Почему вокруг тебя определенные МЧ или их нет вообще</li>
							</ul>
							<div className={cs.card_practic}>
								<p>Практика</p>
								<ul>
									<li>Какие отношения ты выбираешь</li>
								</ul>
							</div>
						</div>
					</Card>
					<Card className={`${cs.card} ${cs.line_s}`}>
						<span className={font.className}>2 день марафона</span>
						<div className={cs.card_main}>
							<ul>
								<li>Как перестать “притягивать” не тех мужчин</li>
								<li>Что нужно сделать чтобы выйти из круга повторяющих сценариев</li>
								<li>Как правильно применять алгоритмы счастливых отношений, что мешает любви в отношениях</li>
								<li>В чем причина конфликтов</li>
								<li>Освоишь быстрый путь восстановления гармонии и любви</li>
							</ul>
							<div className={cs.card_practic}>
								<p>Практика</p>
								<ul>
									<li>Благословение родителей на счастливую женскую судьбу</li>
								</ul>
							</div>
						</div>
					</Card>
					<Card className={cs.card}>
						<span className={font.className}>3 день марафона</span>
						<div className={cs.card_main}>
							<ul>
								<li>Как вернуть женственность и свою силу, не зависимо от возраста</li>
								<li>Как быть желанной для достойного мужчины</li>
								<li>Как правильно выбирать мужчину и выстраивать гармоничные отношения</li>
							</ul>
							<div className={cs.card_practic}>
								<p>Практика</p>
								<ul>
									<li>Я — женщина</li>
									<li>Создаем новый образ себя</li>
								</ul>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</Container>
	);
}