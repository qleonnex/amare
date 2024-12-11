"use client"

import { Title } from '@/components/ui/title'
import { useContext, useEffect, useRef } from 'react'
import { TariffYContext } from '@/providers/TarifYProvider'
import cs from "./style.module.scss"
import { PaymentContext } from "@/providers/PaymentProvider";

export const Tariffs = () => {
	const { setPositionY } = useContext(TariffYContext);
	const innerRef = useRef<HTMLDivElement>(null);
	const { openPayment } = useContext(PaymentContext);

	useEffect(() => {
		setPositionY(Number(innerRef.current?.offsetTop));
	}, [])

	return (
		<div ref={innerRef} className={cs.inner}>
			<Title>Тарифы</Title>
			<div className={cs.cards}>
				<div className={cs.card}>
					<h1>СЕРЕБРО</h1>
					<ul>
						<li>11 модулей с ДЗ и практиками</li>
						<li>1 живой  разбор  с экспертом</li>
						<li>Общий чат с куратором и психологом</li>
						<li>Доступ в течении 3-х месяцев</li>
					</ul>
					<p className={cs.price}>
						<span>79.000₽</span>
						59.900₽
					</p>
					<span>Рассрочка 6 месяцев ~8.000₽/мес.</span>
					<button
						onClick={() => openPayment({ title: "Тариф «Серебро»", price: 59900 })}
					>
						Приобрести
					</button>
				</div>
				<div className={cs.card}>
					<h1>ЗОЛОТО</h1>
					<ul>
						<li>12 модулей с ДЗ и практиками</li>
						<li>4 живой  разбор  с экспертом</li>
						<li>Общий чат с куратором и психологом</li>
						<li>Доступ в течении 6-ти месяцев</li>
					</ul>
					<p className={cs.price}>
						<span>120.000₽</span>
						92.000₽
					</p>
					<span>Рассрочка 6 месяцев ~15.333₽/мес.</span>
					<button
						onClick={() => openPayment({ title: "Тариф «Золото»", price: 92000 })}
					>
						Приобрести
					</button>
				</div>
				<div className={cs.card}>
					<h1>ПЛАТИНА</h1>
					<ul>
						<li>12 модулей с ДЗ и практиками</li>
						<li>4 живой  разбор  с экспертом</li>
						<li>6 персональные консультации с экспертами</li>
						<li>Отдельный чат с экспертом</li>
						<li>Личное сопровождение в течении 3 месяцев</li>
						<li>Доступ в течении 1-го года</li>
					</ul>
					<p className={cs.price}>
						500.000₽
					</p>
					<button
						onClick={() => openPayment({ title: "Тариф «Платина»", price: 500000, noInstalment: true })}
					>
						Приобрести
					</button>
				</div>
			</div>
		</div>
	);
}