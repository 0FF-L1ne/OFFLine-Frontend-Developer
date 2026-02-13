import { useTheme } from '../../../../../../context/ThemeContext'
import Point from '../../../../../../UI/point/Point'
import { motion } from 'framer-motion'
import './AboutSection.css'

const AboutSection = ({ children }) => {
	const { isDark } = useTheme()
	const item = {
		hidden: { opacity: 0, x: -60 },
		visible: { opacity: 1, x: 0 },
	}
	return (
		<motion.div
			className='about-row'
			style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)' }}
			variants={item}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			<Point className='about-point' /> <p className='about-text'>{children}</p>
		</motion.div>
	)
}

export default AboutSection
