import type { ReactNode } from "react";
import { RelationshipLayout } from "@/components/layouts/relationship";
import "../assets/global.css";
import { Cormorant } from "next/font/google";

const font = Cormorant({
	weight: ["400", "500", "600"],
	subsets: ["latin", "cyrillic"]
})

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html>
			<body className={font.className}>
				<RelationshipLayout>{children}</RelationshipLayout>
			</body>
		</html>
	);
}