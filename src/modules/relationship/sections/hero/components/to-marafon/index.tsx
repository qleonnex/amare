"use client";

import { useToMarafon } from "@/modules/relationship/sections/hero/components/to-marafon/hook";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export const ToMarafon = ({ variant, responsivable = false }: { variant: "light" | "dark", responsivable?: boolean }) => {
	const { redirect } = useToMarafon();
	const [size, setSize] = useState(window.innerWidth);
	
	return (
		<Button variant={variant} onClick={redirect}>
			{!responsivable && "Присоединиться к марафону"}
			{size > 1024 && responsivable && "Присоединиться к марафону"}
			{size < 1024 && responsivable && <Icon path="/icons/arrow.svg" />}
		</Button>
	);
};