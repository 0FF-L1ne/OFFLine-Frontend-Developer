import { useTheme } from '../../../../../context/ThemeContext'
import PortfolioSection from './portfolio-section/PortfolioSection'
import cryptoCup from './../../../../../assets/cryptocup.webp'
import { motion } from 'framer-motion'
import './Portfolio.css'

const Portfolio = () => {
	const { isDark } = useTheme()
	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.3,
				delay: 0.3,
			},
		},
	}

	return (
		<motion.section className='portfolio' id='portfolio'>
			<motion.h1
				className='portfolio-label'
				initial={{ x: -50, opacity: 0 }}
				transition={{ x: { duration: 0.7, delay: 0.5 }, opacity: { duration: 1, delay: 0.5 } }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				style={{ color: isDark ? 'var(--dark-green-color)' : 'var(--light-green-color)' }}
			>
				Portfolio
			</motion.h1>

			<motion.section
				className='portfolio-sections'
				variants={container}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.4 }}
			>
				<PortfolioSection
					year='October 2025 - November 2025'
					title='Crypto Cup'
					image={cryptoCup}
					description='This project was developed for educational purposes; it resembles a crypto exchange, but the database is not real.'
				/>
			</motion.section>
		</motion.section>
	)
}

export default Portfolio
