"use client"

import { createContext, ReactNode, useState } from 'react'
import { OpenImg } from '@/components/shared/open-img'

interface OpenContextReturn {
	openImg: (src: string) => void
}

export const OpenerContext = createContext({} as OpenContextReturn);

export const OpenerProvider = ({ children }: { children: ReactNode }) => {
	const [src, setSrc] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	function openImg(src: string) {
		setSrc(src)
		setIsOpen(true)
	}

	return (
		<OpenerContext.Provider value={{ openImg }}>
			{children}
			<OpenImg src={src!} isOpen={isOpen} setIsOpen={setIsOpen} />
		</OpenerContext.Provider>
	);
}