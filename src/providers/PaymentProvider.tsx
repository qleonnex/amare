"use client"

import type { ReactNode } from "react";
import { createContext, useState } from "react";
import { Payment } from "@/components/shared/payment";

export interface PaymentDetail {
	title: string;
	price: number;
	noInstalment?: boolean;
}

interface PaymentContextValue {
	openPayment: (data: PaymentDetail) => void;
}

export const PaymentContext = createContext({} as PaymentContextValue);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [paymentData, setPaymentData] = useState<PaymentDetail>({
		title: "",
		price: 0,
		noInstalment: false,
	});
	
	function openPayment(data: PaymentDetail) {
		setIsOpen(true);
		setPaymentData(data);
	}
	
	return (
		<PaymentContext.Provider value={{ openPayment }}>
			<Payment isOpen={isOpen} setIsOpen={setIsOpen} paymentData={paymentData} />
			{children}
		</PaymentContext.Provider>
	);
}