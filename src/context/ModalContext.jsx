import { createContext, useContext, useState } from 'react'

const ModalContext = createContext(null)

export const ModalProvider = ({ children }) => {
	const [modalContent, setModalContent] = useState(null)
	const [isOpen, setIsOpen] = useState(false)

	const openModal = (content) => {
		setModalContent(content)
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
		setModalContent(null)
	}

	const value = {
		isOpen,
		modalContent,
		openModal,
		closeModal,
	}

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = () => {
	return useContext(ModalContext)
}
