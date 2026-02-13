import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../../context/ThemeContext'
import { useModal } from '../../../context/ModalContext'
import MenuButton from '../../../UI/menu-button/MenuButton'
import HeaderFixed from './HeaderFixed'
import lightIcon from '../../../assets/light-icon.svg'
import darkIcon from '../../../assets/dark-icon.svg'
import logo from '../../../assets/logo.svg'
import './Header.css'

const Header = ({ categories }) => {
	const [shouldShowFixed, setShouldShowFixed] = useState(false)
	const { isDark, toggleTheme } = useTheme()
	const { isOpen } = useModal()

	const handleScroll = useCallback((e) => {
		e.preventDefault()
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<div className='container'>
			<motion.div
				onViewportLeave={() => setShouldShowFixed(true)}
				onViewportEnter={() => setShouldShowFixed(false)}
			/>

			<motion.header
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ opacity: { duration: 1 } }}
				style={{
					background: 'inherit',
					color: isDark ? 'var(--text-light)' : 'var(--text-dark)',
				}}
				className='header'
			>
				<a href='#logo' onClick={handleScroll}>
					<img src={logo} alt='OFF_Line' className='logo' id='logo' />
				</a>

				<div className='header-categories'>
					{categories.map(({ id, name, path }) => (
						<a key={id} href={path} style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)' }}>
							{name}
						</a>
					))}
				</div>

				<motion.div className='theme-toggle-border'>
					<motion.button
						className='light-switch-icon'
						onClick={toggleTheme}
						initial={false}
						animate={{ x: isDark ? '88%' : '0%' }}
						transition={{
							duration: 0.25,
						}}
					>
						<motion.img
							src={isDark ? darkIcon : lightIcon}
							alt='Переключить тему'
							initial={false}
							animate={{ rotate: isDark ? 20 : -60 }}
							transition={{ duration: 0.25 }}
						/>
					</motion.button>
				</motion.div>
				<MenuButton />
			</motion.header>

			{!isOpen ? (
				<HeaderFixed handleScroll={handleScroll} shouldShowFixed={shouldShowFixed} categories={categories} />
			) : null}
		</div>
	)
}

export default Header
