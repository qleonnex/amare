import cs from "./style.module.css";

interface TitleProps {
	children: string,
	variant?: "light" | "dark",
}

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