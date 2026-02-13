import { useTheme } from '../../../../../context/ThemeContext'
import SkillsSection from './skills-section/SkillsSection'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
	const { isDark } = useTheme()
	const cards = [
		'HTML 5, JSX',
		'CSS 3, SCSS, PostCSS, Tailwind CSS',
		'JavaScript (OOP)',
		'Ant Design, Material UI (MUI)',
		'React',
		'Figma, Adobe Photoshop',
		'React Router, React Custom Hooks',
		'Framer Motion, Animations',
		'Webpack, Vite',
		'Accessibility, BEM, UX',
		'Python (Basic level)',
		'Git, GitHub, GitLab',
	]
	const style = {
		background: isDark ? 'var(--bg-section-dark)' : 'var(--bg-section-light)',
		color: isDark ? 'var(--text-light)' : 'var(--text-dark)',
	}

	return (
		<section className='skills' id='skills'>
			<motion.h1
				className='skills-label'
				initial={{ x: -50, opacity: 0 }}
				transition={{ x: { duration: 0.7, delay: 0.5 }, opacity: { duration: 1, delay: 0.5 } }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				style={{ color: isDark ? 'var(--dark-green-color)' : 'var(--light-green-color)' }}
			>
				Навыки
			</motion.h1>
			<section className='skills-section'>
				<SkillsSection cards={cards} style={style} />
			</section>
		</section>
	)
}

export default Skills
