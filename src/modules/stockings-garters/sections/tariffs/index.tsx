import { Title } from '@/components/ui/title'
import cs from "./style.module.css"

export const Tariffs = () => {
	return (
		<div className={cs.inner}>
			<Title>Тарифы</Title>
			<div className={cs.cards}>
				<div className={cs.card}>
					<h1>СЕРЕБРО</h1>
					<ul>
						<li>11 уроков с ДЗ и практиками</li>
						<li>1 живой  разбор  с экспертом</li>
						<li>Общий чат с куратором и психологом</li>
						<li>Доступ в течении 3-х месяцев</li>
					</ul>
					<p className={cs.price}>
						<span>79.000₽</span>
						59.900₽
					</p>
					<span>Рассрочка 6 месяцев — 8.000₽/мес.</span>
					<button>Приобрести</button>
				</div>
				<div className={cs.card}>
					<h1>ЗОЛОТО</h1>
					<ul>
						<li>12 уроков с ДЗ и практиками</li>
						<li>4 живой  разбор  с экспертом</li>
						<li>Общий чат с куратором и психологом</li>
						<li>Доступ в течении 6-ти месяцев</li>
					</ul>
					<p className={cs.price}>
						<span>120.000₽</span>
						92.000₽
					</p>
					<span>Рассрочка 6 месяцев — 15.333₽/мес.</span>
					<button>Приобрести</button>
				</div>
				<div className={cs.card}>
					<h1>ПЛАТИНА</h1>
					<ul>
						<li>12 уроков с ДЗ и практиками</li>
						<li>4 живой  разбор  с экспертом</li>
						<li>2 персональные консультации с экспертами</li>
						<li>Общий чат с куратором и психологом</li>
						<li>Доступ в течении 1-го года</li>
					</ul>
					<p className={cs.price}>
						500.000₽
					</p>
					<button>Приобрести</button>
				</div>
			</div>
		</div>
	);
}