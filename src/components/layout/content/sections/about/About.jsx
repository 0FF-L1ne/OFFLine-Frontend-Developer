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
				<b className={isDark ? 'dark' : 'light'}>Привет!</b> Я{' '}
				<b className={isDark ? 'dark' : 'light'}>OFF_Line.</b>
				<br />И это моё <b className={isDark ? 'dark' : 'light'}>портфолио!</b>
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
					Я начинающий frontend-разработчик (уровня Junior) и продолжаю профессионально расти. За последний
					год изучения веб-разработки и современных технологий я многое узнал, и многое уже внедрил сюда, но —
					это только начало.
				</AboutSection>

				<AboutSection>
					Работая над данным проектом, я продолжаю осваивать новые инструменты, постепенно усложняя свои
					проекты и повышая качество работы.
				</AboutSection>

				<AboutSection>
					Этот сайт является частью моего индивидуального проекта, а также служит личным портфолио, где я
					демонстрирую процесс разработки, использованные технологии, дизайн и свой подход к созданию SPA.
				</AboutSection>

				<AboutSection>
					В будущем я намерен углубиться во фронтенд-разработку и продолжить совершенствовать свои навыки в
					области дизайна интерфейсов и архитектуры приложений. Кроме того, я планирую разместить здесь и
					другие свои проекты.
				</AboutSection>
			</motion.section>
		</motion.section>
	)
}

export default About
