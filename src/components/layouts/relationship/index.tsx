import type { ReactNode } from "react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import cs from "./style.module.css";
import { Container } from "@/components/shared/container";

export const RelationshipLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={cs.layout}>
			<Container>
				<Header/>
			</Container>
			<main>
				{children}
			</main>
			<Container>
				<Footer/>
			</Container>
		</div>
	);
}