"use client"

import cs from "./style.module.scss";
import { usePathname } from "next/navigation";

export const Footer = () => {
	const pathname = usePathname()
	console.log(pathname);
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
			{pathname === "/stockings-garters" && (
				<>
					<div className="flex items-center justify-center py-3 gap-6">
						<a className="underline" href="/files/privacy-policy.docx" download>Политика конфиденциальности</a>
						<a className="underline" href="/files/offer.docx" download>Договор оферты</a>
					</div>
					<p
						className="text-[14px] text-white/80 text-center mb-4">Мы предоставляем возможность оплатить покупку онлайн непосредственно через интернет-магазин. К оплате принимаются пластиковые карты VISA, MasterCard и МИР. Прием оплат осуществляется при помощи системы Продамус.Платежи, при этом данные карт и клиента передаются по защищенным каналам связи. Приём платежей происходит через защищённое безопасное соединение, используется SSL протокол.
					</p>
				</>
			)}
		</>
	);
}