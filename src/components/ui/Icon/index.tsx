import cs from "./style.module.css";

interface LogoProps {
	path: string;
	size?: string;
	width?: string;
	height?: string;
	color?: string;
	className?: string;
}

export const Icon = ({
	path,
	size = "24px",
	width,
	height,
	color = "#FFF",
	className
}: LogoProps) => {
	return (
		<div
			style={{
				width: width || size,
				height: height || size,
				maskImage: `url(${path})`,
				backgroundColor: color[0] === "#" ? color : "",
			}}
			className={`
				${cs.icon}
				${color[0] === "b" ? color : ""}
				${className}
			`}
		></div>
	);
}