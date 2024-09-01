"use client";
import { createContext, useState } from 'react'

export const MenuContext = createContext(false);

const MenuProvider = ({ children }) => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>{children}</MenuContext.Provider>
	)
}

export default MenuProvider