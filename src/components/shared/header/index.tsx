import Icon from '@/components/ui/iconic'
import Link from "next/link"
import cs from "./style.module.css"

export const Header = () => {
	return (
		<header className={cs.header}>
			<Link href="..">
				<div className={cs.header_inner}>
					<Icon
						className={cs.icon}
						path="/icons/logo.svg"
						width="102px"
						height="82px"
						color="bg-primary"
					/>
					<p className={cs.name}>
						Академия Психологии Устойчивых отношений.
						<br/>
						Знакомства, брак, семья
					</p>
				</div>
			</Link>
		</header>
	);
}