"use client";

import { Button } from "@/components/ui/button"
import { useToMarafon } from './hook'


export const ToMarafon = ({ text = "Присоединиться к марафону", variant }: { variant: "light" | "dark", text?: string }) => {
	const { redirect } = useToMarafon();
	
	return (
		<Button variant={variant} onClick={redirect}>
			{text}
		</Button>
	);
};