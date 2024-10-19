"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useEffect, useState } from "react";
import { useToMarafon } from "./hook";

let windows = null;
if (typeof window !== "undefined") {
	windows = window;
};

export const ToMarafon = ({ variant, responsivable = false }: { variant: "light" | "dark", responsivable?: boolean }) => {
	
	
	const { redirect } = useToMarafon();
	const [size, setSize] = useState(windows?.innerWidth);
	
	useEffect(() => setSize(windows?.innerWidth), []);
	
	return (
		<Button variant={variant} onClick={redirect}>
			{!responsivable && "Присоединиться к марафону"}
			{size! > 1024 && responsivable && "Присоединиться к марафону"}
			{size! < 1024 && responsivable && <Icon path="/icons/arrow.svg" />}
		</Button>
	);
};