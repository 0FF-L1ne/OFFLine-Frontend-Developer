import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../../../context/ThemeContext'
import { useMenu } from '../../../context/MenuContext'
import MenuButton from '../../../UI/menu-button/MenuButton'
import lightIcon from '../../../assets/light-icon.svg'
import darkIcon from '../../../assets/dark-icon.svg'
import logo from '../../../assets/logo.svg'

const HeaderFixed = ({ handleScroll, shouldShowFixed, categories }) => {
	const { isDark, toggleTheme } = useTheme()
	const { isOpenMenu } = useMenu()

	return (
		<>
			<AnimatePresence>
				{shouldShowFixed && (
					<motion.header
						className='header fixed'
						initial={{ opacity: 0, y: -100 }}
						style={{
							color: isDark ? 'var(--text-light)' : 'var(--text-dark)',
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						exit={{ opacity: 0, y: -100 }}
						transition={{ stiffness: 120, damping: 18 }}
					>
						<a href='#logo' onClick={handleScroll}>
							<img src={logo} alt='OFF_Line' className={`logo ${isOpenMenu ? 'open' : null}`} id='logo' />
						</a>
						<div className='header-categories'>
							{categories.map(({ id, name, path }) => (
								<a key={id} href={path} style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)' }}>
									{name}
								</a>
							))}
						</div>
						<motion.div className={`theme-toggle-border ${isOpenMenu ? 'open' : null}`}>
							<motion.button
								className='light-switch-icon'
								onClick={toggleTheme}
								initial={false}
								animate={{ x: isDark ? '87%' : '0%' }}
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
				)}
			</AnimatePresence>
		</>
	)
}

export default HeaderFixed
