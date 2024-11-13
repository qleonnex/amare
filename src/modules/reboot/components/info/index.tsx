"use client";

import { Card } from '@/components/ui/card'
import cs from "./style.module.css"

export const Info = ({ className = "" }: { className?: string }) => {
	return (
		<Card className={`${cs.info} ${className}`}>
			<div className={cs.inner}>
				<h4>Марафон проходит в закрытой группе Telegram</h4>
				<div className={cs.left_bottom}>
					<p>C 26 по 28 ноября</p>
				</div>
			</div>
		</Card>
	);
}