import { createContext, useContext, useState } from 'react'

const MenuContext = createContext(null)

export const MenuProvider = ({ children }) => {
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	const openMenu = () => {
		setIsOpenMenu(true)
	}

	const closeMenu = () => {
		setIsOpenMenu(false)
	}

	const toggleMenu = () => {
		return setIsOpenMenu((prev) => !prev)
	}

	const values = {
		isOpenMenu,
		openMenu,
		closeMenu,
		toggleMenu,
	}

	return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
}

export const useMenu = () => {
	return useContext(MenuContext)
}
