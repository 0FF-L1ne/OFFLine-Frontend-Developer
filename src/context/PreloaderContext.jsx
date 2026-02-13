import { createContext, useContext, useState, useEffect } from 'react'

const PreloaderContext = createContext(null)

export const PreloaderProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1500)
	}, [])

	return <PreloaderContext.Provider value={{ isLoading }}>{children}</PreloaderContext.Provider>
}

export const usePreloader = () => {
	return useContext(PreloaderContext)
}
