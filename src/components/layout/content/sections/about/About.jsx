import { useTheme } from '../../../../../context/ThemeContext'
import AboutSection from './about-section/AboutSection'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
	const { isDark } = useTheme()
	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	return (
		<motion.section className='about' id='about'>
			<motion.h1
				className='about-title'
				initial={{ x: -80, opacity: 0 }}
				style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)' }}
				transition={{ x: { duration: 0.7 }, opacity: { duration: 1 } }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
			>
				<b className={isDark ? 'dark' : 'light'}>Hello!</b> My name is{' '}
				<b className={isDark ? 'dark' : 'light'}>Ismail.</b>
				<br />
				And this is my <b className={isDark ? 'dark' : 'light'}>portfolio!</b>
			</motion.h1>

			{/* Пункты */}

			<motion.section
				className='about-section'
				variants={container}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.49 }}
			>
				<AboutSection>
					I am an aspiring frontend developer at the junior level, and I am continuing to grow. Over the past
					year of studying web development and modern technologies, I have learned a great deal—and I am just
					getting started.
				</AboutSection>

				<AboutSection>
					As I develop this project, I continue to master new tools, gradually increasing the complexity of my
					projects and improving the quality of my work.
				</AboutSection>

				<AboutSection>
					This site is part of my individual project and also serves as a personal portfolio where I showcase
					the development process, the technologies used, the design, and my approach to building an SPA.
				</AboutSection>

				<AboutSection>
					In the future, I intend to delve deeper into frontend development and further hone my skills in
					interface design and application architecture. Additionally, I plan to integrate my other projects
					here as well.
				</AboutSection>
			</motion.section>
		</motion.section>
	)
}

export default About
