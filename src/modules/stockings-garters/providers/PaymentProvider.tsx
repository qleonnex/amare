"use client"

import type { ReactNode } from "react";
import { createContext, useState } from "react";
import { Payment } from "@/modules/stockings-garters/components/payment";

interface PaymentDetail {
	title: string;
	price: number;
}

interface PaymentContextValue {
	openPayment: (data: PaymentDetail) => void;
}

export const PaymentContext = createContext({} as PaymentContextValue);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [price, setPrice] = useState(0);
	const [title, setTitle] = useState("");
	
	function openPayment(data: PaymentDetail) {
		setIsOpen(true);
		setPrice(data.price);
		setTitle(data.title);
	}
	
	return (
		<PaymentContext.Provider value={{ openPayment }}>
			<Payment isOpen={isOpen} setIsOpen={setIsOpen} price={price} title={title} />
			{children}
		</PaymentContext.Provider>
	);
}