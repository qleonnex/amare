import cs from "./style.module.css";

export const Footer = () => {
	return (
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
	);
}