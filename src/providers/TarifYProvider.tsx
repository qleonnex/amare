"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface OpenContextReturn {
	positionY: number;
	setPositionY: Dispatch<SetStateAction<number>>
}

export const TariffYContext = createContext({} as OpenContextReturn);

export const TariffYProvider = ({ children }: { children: ReactNode }) => {
	const [positionY, setPositionY] = useState(0);

	return (
		<TariffYContext.Provider value={{ positionY, setPositionY }}>
			{children}
		</TariffYContext.Provider>
	);
}