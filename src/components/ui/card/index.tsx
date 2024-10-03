import type { ReactNode } from "react";
import cs from "./style.module.css";

interface CardProps {
	children: ReactNode;
	className?: string;
}

export const Card = ({ children, className }: CardProps) => {
	return (
		<div className={`${cs.card} ${className}`}>
			{children}
		</div>
	);
};