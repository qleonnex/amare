import cs from "./style.module.css";
import { Cormorant } from "next/font/google";

interface TitleProps {
	children: string,
	variant?: "light" | "dark",
}

// const font = Cormorant({
// 	weight: "600",
// 	subsets: ["cyrillic"],
// })

export const Title = ({
	children,
	variant = "light"
}: TitleProps) => {
	const variants = {
		light: cs.light,
		dark: cs.dark
	}[variant]
	
	return (
		<h2 className={`${cs.title} ${variants}`}>{children}</h2>
	);
}