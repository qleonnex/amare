import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import { Title } from '@/components/ui/title'
import cs from "./style.module.css"

export const Useful = () => {
	return (
		<Card className={cs.useful}>
			<Container>
				<div className={cs.inner}>
					<Title variant="dark">Кому особенно будет полезен марафон</Title>
					<ul>
						<li>Решить проблему одиночества</li>
						<li>Вернуть себе женскую силу и стать той женщиной, в которую влюбляются, уважают и боятся потерять</li>
						<li>Создать вокруг себя манкое, вкусное поле для успешных мужчин, что бы ты смогла выбрать лучшего для себя</li>
						<li>Избавиться от негативных сценариев в своей жизни: мужчины пропадают после нескольких свиданий или не вкладываются и рассматривают тебя как любовницу, а не будущую жену</li>
						<li>Влюбить в себя по новой своего мужчину и вывести отношения на более качественный уровень, даже если отношения на грани разрыва</li>
						<li>Выстроить выгодные для себя отношения с надежным МЧ, что бы он взял на себя ответственность за тебя и твоих детей</li>
						<li>Кто боится за ново вступать в отношения из за прошлого негативного опыта: мужчина не обеспечивал, не вкладывался, вел себя агрессивно и неуважительно</li>
						<li>Научиться любую конфликтную ситуацию оборачивать в свою пользу и без крика и истерик добиваться желаемого от своего мужчины</li>
						<li>Кто отдает в отношениях больше, чем получает и хочет научиться включать на себя мужчину и получать от него внимание, помощь, поддержку, финансовые вложения, подарки, путешествия</li>
						<li>Кто состоит в отношениях, из которых ушла радость и любовь: возможно мужчина изменяет или не считается с твоим мнением. Перезапустить отношения и стать той женщиной, которую любят и ценят</li>
						<li>Научиться мягко влиять на мужчину, его друзей и родственников: свекровь, бывшая жена, дети и выстраивать с ними выгодные для тебя отношения</li>
						<li>Разобраться в решении финансовых вопросов в паре, что бы чувствовать себя защищенной</li>
						<li>Раскрыть свою сексуальность и получать удовольствие в сексе со своим мужчиной</li>
					</ul>
				</div>
			</Container>
		</Card>
	);
}