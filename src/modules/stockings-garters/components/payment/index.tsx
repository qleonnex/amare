"use client"

import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

import cs from "./style.module.css";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { PaymentDetail } from "../../providers/PaymentProvider";

interface PaymentProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	paymentData: PaymentDetail;
}

interface FormData {
	phone: string;
	email: string;
	tg: string;
}

let newWindow: Window | null = null;
if (typeof window !== "undefined") newWindow = window;

export const Payment = ({ isOpen, setIsOpen, paymentData }: PaymentProps) => {
	const [positionY, setPositionY] = useState(0);
	const { register, formState, handleSubmit } = useForm<FormData>()
	const router = useRouter();
	
	async function onSubmit(data: FormData) {
		try {
			const response = await fetch(
				`https://amareladyschool.payform.ru/?do=link&products[0][name]=${paymentData.title}&products[0][price]=${paymentData.price}&products[0][quantity]=1&customer_phone=${data.phone}&customer_extra=${data.tg}&customer_email=${data.email}${paymentData.noInstalment ? "&available_payment_methods=AC|ACkz|ACkztjp|ACf|ACUSDSOM|SBP|QW|PC|GP|sbol|invoice|monetaworld" : ""}`
			)
			const text = await response.text();
			router.replace(text);
		} catch(e) {
			console.error(e);
		}
	}
	
	function onClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (e.target === e.currentTarget) {
			setIsOpen(false);
		}
	}
	
	
	
	useLayoutEffect(() => {
		function scroll() {
			setPositionY(Number(newWindow?.scrollY))
		}
		
		addEventListener("scroll", scroll)
		
		return () => removeEventListener("scroll", scroll);
	}, [])
	
	useEffect(() => {
		if (isOpen) document.body.style.overflowY = "hidden";
		if (!isOpen) document.body.style.overflowY = "auto";
	}, [isOpen]);
	
	if (!isOpen) return;
	
	return createPortal(
			<div className={cs.payment} style={{ top: positionY }} onClick={onClose}>
				<div className={cs.inner}>
					<h1>Внесение доп. данных</h1>
					<form className={cs.form} onSubmit={handleSubmit(onSubmit)}>
						<Input
							placeholder="Номер телефона"
							type="tel"
							error={formState.errors.phone?.message}
							{...register("phone", {
								required: "Это обязательное поле",
								pattern: {
									message: 'Неправильный формат номера телефона',
									value: /^\+7\d{10}$/
								}
							})}
						/>
						<Input
							placeholder="Почта"
							type="email"
							error={formState.errors.email?.message}
							{...register("email", {
								required: "Это обязательное поле",
								pattern: {
									message: "Неправильный формат почты",
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
								}
							})}
							
						/>
						<Input
							placeholder="Логин телеграм (@telegram_user)"
							type="text"
							error={formState.errors.tg?.message}
							{...register("tg", {
								required: "Это обязательное поле",
								pattern: {
									message: "Неправильный формат, начинаться должно с @",
									value: /^@[a-zA-Z0-9_]{4,32}$/
								}
							})}
						/>
						<div>
							<button disabled={formState.isLoading}>Оплатить {paymentData.price}₽</button>
							<p>Нажимая кнопку, вы соглашаетесь с офертой</p>
						</div>
					</form>
					<button onClick={() => setIsOpen(false)}>✖</button>
				</div>
			</div>,
	
		document.body
	)
}