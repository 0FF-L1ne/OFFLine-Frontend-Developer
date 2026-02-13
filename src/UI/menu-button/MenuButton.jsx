import { useMenu } from '../../context/MenuContext'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import './MenuButton.css'

const MenuButton = () => {
	const { isOpenMenu, toggleMenu } = useMenu()

	return (
		<motion.button
			className='burger-menu'
			aria-label={isOpenMenu ? 'Закрыть меню' : 'Открыть меню'}
			aria-expanded={isOpenMenu}
			onClick={toggleMenu}
		>
			<motion.div
				style={{ display: 'flex', alignItems: 'center' }}
				initial={false}
				animate={{ rotate: isOpenMenu ? 90 : 0 }}
				transition={{ duration: 0.2 }}
			>
				{isOpenMenu ? <FiX className='burger' /> : <RxHamburgerMenu className='burger' />}
			</motion.div>
		</motion.button>
	)
}

export default MenuButton
