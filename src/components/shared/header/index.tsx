import cs from "./style.module.css";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

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