import logo from './../../assets/logo.svg'
import { motion } from 'framer-motion'
import './Preloader.css'

const Preloader = () => {
	const width = window.innerWidth
	let initialVariant = 'desktop'
	if (width <= 1380) initialVariant = 'tablet'
	else if (width <= 1620) initialVariant = 'oldScreen'
	else if (width <= 768) initialVariant = 'mobile'

	const variants = {
		desktop: { scale: 1.5 },
		oldScreen: { scale: 1.25 },
		tablet: { scale: 1 },
		mobile: { scale: 1 },
	}

	return (
		<div className='preloader-overlay' style={{ perspective: '1000px' }}>
			<motion.img
				src={logo}
				alt='Идет загрузка...'
				className='preloader'
				variants={variants}
				initial={initialVariant}
				animate={{
					rotateY: [0, 360],
					scale: 0,
					opacity: 0,
				}}
				transition={{
					rotateY: { duration: 1, ease: 'easeInOut', repeat: 0 },
					opacity: { delay: 1, duration: 0.2 },
					default: { delay: 1, duration: 0.5 },
				}}
			/>
		</div>
	)
}

export default Preloader
