import { useEffect } from 'react'
import { useMenu } from '../../context/MenuContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import './BurgerMenu.css'

const BurgerMenu = () => {
	const { isOpenMenu, closeMenu } = useMenu()
	const { isDark } = useTheme()

	useEffect(() => {
		document.body.style.overflow = isOpenMenu ? 'hidden' : ''
	}, [isOpenMenu])

	const categories = [
		{ id: 'about', name: 'Обо мне', path: '#about' },
		{ id: 'portfolio', name: 'Портфолио', path: '#portfolio' },
		{ id: 'skills', name: 'Навыки', path: '#skills' },
		{ id: 'contacts', name: 'Контакты', path: '#contacts' },
	]

	return (
		<AnimatePresence>
			{isOpenMenu && (
				<motion.div
					className='menu-overlay'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					style={{ background: isDark ? 'var(--bg-dark)' : 'var(--bg-light)' }}
					transition={{ duration: 0.25 }}
					onClick={closeMenu}
				>
					<motion.div
						className='menu-content'
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)' }}
						exit={{ opacity: 0, y: -30 }}
						transition={{ duration: 0.25 }}
						onClick={(e) => e.stopPropagation()}
					>
						{categories.map(({ id, name, path }) => (
							<a
								key={id}
								href={path}
								style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)', textDecoration: 'none' }}
								onClick={closeMenu}
							>
								{name}
							</a>
						))}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default BurgerMenu
