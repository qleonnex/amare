import type { ReactNode } from "react";
import cs from "./style.module.scss";

export const Container = ({ children }: { children: ReactNode }) => {
	return (
		<div className={cs.cont}>
			<div>{children}</div>
		</div>
	);
}