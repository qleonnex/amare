"use client";

import { Container } from '@/components/shared/container'
import { Card } from '@/components/ui/card'
import cs from "./style.module.css"

export const Info = ({ className = "" }: { className?: string }) => {
	return (
		<Container>
			<Card className={`${cs.info} ${className}`}>
				<div className={cs.left}>
					<h4>Марафон проходит в закрытой группе Telegram</h4>
					<div className={cs.left_bottom}>
						<p>C 12 по 14 ноября</p>
						<p>Начало в 13ч МСК</p>
					</div>
				</div>
			</Card>
		</Container>
	);
}