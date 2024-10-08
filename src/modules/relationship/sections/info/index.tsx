"use client";

import { Container } from "@/components/shared/container";
import cs from "./style.module.css";
import { Card } from "@/components/ui/card";

export const Info = ({ className = "" }: { className?: string }) => {
	return (
		<Container>
			<Card className={`${cs.info} ${className}`}>
				<div className={cs.left}>
					<h4>Марафон проходит в закрытой группе Telegram</h4>
					<div className={cs.left_bottom}>
						<p>C 4 по 6 ноября</p>
						<p>Начало в 13ч МСК</p>
					</div>
				</div>
			</Card>
		</Container>
	);
}