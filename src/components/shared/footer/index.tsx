import cs from "./style.module.css";

export const Footer = () => {
	return (
		<>
			<footer className={cs.footer}>
				<div className={cs.left}>
					<h3>
						Академия Психологии Устойчивых отношений.
						Знакомства, брак, семья
					</h3>
					<span>ИП Лазарева Екатерина</span>
				</div>
				<div>
					<a className={cs.email} href="mailto:amareladyschool@gmail.com">
						amareladyschool@gmail.com
					</a>
				</div>
			</footer>
			<p className="text-[14px] text-white/80 text-center mb-4">Мы предоставляем возможность оплатить покупку онлайн непосредственно через интернет-магазин. К оплате принимаются пластиковые карты VISA, MasterCard и МИР. Прием оплат осуществляется при помощи системы Продамус.Платежи, при этом данные карт и клиента передаются по защищенным каналам связи. Приём платежей происходит через защищённое безопасное соединение, используется SSL протокол.</p>
		</>
	);
}