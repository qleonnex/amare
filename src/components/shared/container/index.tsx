import type { ReactNode } from "react";
import cs from "./style.module.css";

export const Container = ({ children }: { children: ReactNode }) => {
	return (
		<div className={cs.cont}>
			<div>{children}</div>
		</div>
	);
}