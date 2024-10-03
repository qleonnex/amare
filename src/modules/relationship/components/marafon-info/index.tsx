import { Container } from "@/components/shared/container";
import cs from "./style.module.css";
import { ToMarafon } from "@/modules/relationship/sections/hero/components/to-marafon";
import { Card } from "@/components/ui/card";

export const MarafonInfo = () => {
	return (
		<div className={cs.main}>
			<Container>
				<Card className={cs.info}>
					<div className={cs.left}>
						<h4>Марафон проходит в закрытой группе Telegram</h4>
						<div className={cs.left_bottom}>
							<p>C 22 по 24 октября</p>
							<p>Начало в 13ч МСК</p>
						</div>
					</div>
					<ToMarafon variant="dark" responsivable />
				</Card>
			</Container>
		</div>
	);
}