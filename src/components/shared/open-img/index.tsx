import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import cs from './style.module.scss'


interface OpenImgProps {
	src: string
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

let newWindow: Window | null = null;
if (typeof window !== "undefined") newWindow = window; 

export const OpenImg = ({ src, isOpen, setIsOpen }: OpenImgProps) => {
	const [scroll, setScroll] = useState(newWindow?.scrollY)

	useEffect(() => {
		function scroll() {
			setScroll(window.scrollY);
		}

		window.addEventListener("scroll", scroll)

		return () => window.removeEventListener("scroll", scroll);
	}, [])

	function close(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		e.stopPropagation();
		setIsOpen(false)
		document.body.style.overflowY = "visible"
	}

	useEffect(() => {
		if (isOpen)
			document.body.style.overflowY = "hidden"
	}, [isOpen])

	if (!isOpen) return;

	return createPortal(
		<div className={cs.opener} style={{ top: scroll }} onClick={close}>
			<button className={cs.close} onClick={() => setIsOpen(false)}>❌</button>
			<div className={cs.inner}>
				<img src={src} />
			</div>
		</div>,
		document.body
	);
}