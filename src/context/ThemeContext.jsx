import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme ? savedTheme === 'dark' : true
	})

	//Synchronization + saving the topic to localStorage
	useEffect(() => {
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
		document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
	}, [isDark])

	const toggleTheme = useCallback(() => {
		setIsDark((prev) => !prev)
	}, [isDark])

	return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
	return useContext(ThemeContext)
}
