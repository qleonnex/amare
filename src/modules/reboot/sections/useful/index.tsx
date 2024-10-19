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
						<li>Не чувствуешь себя счастливой в отношениях</li>
						<li>Перестала получать удовольствие от секса</li>
						<li>Твой мужчина не дарит тебе подарки, не вкладывается в тебя</li>
						<li>Ты не понимаешь, почему твой мужчина засматривается на других женщин</li>
						<li>Стараешься для него, но становится только хуже</li>
						<li>Твой мужчина взял паузу и ты не понимаешь, почему? И как его вернуть</li>
						<li>В отношениях все было отлично, но после рождения детей финансовая ситуация ухудшилась, ссоры, скандалы</li>
						<li>Хочешь вернуть гармонию  и почувствовать себя любимой</li>
						<li>Твой мужчина тебя не ценит, ему плевать на твое мнение, ты боишься потерять даже такие отношения, и не знаешь что делать</li>
						<li>Испытываешь жуткую депрессию после расставания, боль и отчаяние накрывают. Не понимаешь, что с тобой не так</li>
						<li>Мужчина вкладывается ,но видит тебя только в роли любовницы и замуж не зовет. Что делать</li>
						<li>Выбираешь «не доступных» мужчин, соглашаешься на все его условия и не чувствуешь удовлетворения от отношений — больше отдаешь , чем получаешь</li>
					</ul>
				</div>
			</Container>
		</Card>
	);
}
