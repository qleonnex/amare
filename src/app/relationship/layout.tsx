import type { ReactNode } from "react";
import { RelationshipLayout } from "@/components/layouts/relationship";

export default function Layout({ children }: { children: ReactNode }) {
	return <RelationshipLayout>{children}</RelationshipLayout>;
}