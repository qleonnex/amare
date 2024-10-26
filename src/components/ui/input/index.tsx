import { forwardRef, InputHTMLAttributes } from "react";
import cs from "./style.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return (
		<div>
			<input ref={ref} className={`${cs.input} ${props.className}`} {...props} />
			{props.error && (
				<p>{props.error}</p>
			)}
		</div>
	);
})

Input.displayName = 'Input';