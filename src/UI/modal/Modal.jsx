import { useEffect } from 'react'
import { useModal } from '../../context/ModalContext'
import { CiSquareRemove } from 'react-icons/ci'
import { motion } from 'framer-motion'
import './Modal.css'

const Modal = () => {
	const { isOpen, modalContent, closeModal } = useModal()

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''
	}, [isOpen])

	return (
		<div className={`modal-overlay ${isOpen ? 'open' : 'closed'}`} onClick={closeModal}>
			<motion.button
				className='close-btn'
				onClick={closeModal}
				whileHover={{ color: 'var(--dark-green-color)' }}
				style={{ scale: 1.3 }}
				transition={{ duration: 0.1 }}
			>
				<CiSquareRemove style={{ color: 'var(--dark-green-color)' }} />
			</motion.button>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				{modalContent}
			</div>
		</div>
	)
}

export default Modal
