import type { ButtonHTMLAttributes, ReactNode } from "react";
import cs from "./style.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: "light" | "dark";
}

export const Button = ({
	children,
	variant = "light",
	...props
}: ButtonProps) => {
	const variants = {
		light: cs.light,
		dark: cs.dark
	}[variant];
	
	return (
		<button className={`${cs.button} ${variants}`} {...props}>
			<span>{children}</span>
			<div className={`${cs.circle} ${variants}`}></div>
		</button>
	);
};