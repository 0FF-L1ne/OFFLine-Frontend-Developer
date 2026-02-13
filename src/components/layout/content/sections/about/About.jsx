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
				<b className={isDark ? 'dark' : 'light'}>Привет!</b> Меня зовут{' '}
				<b className={isDark ? 'dark' : 'light'}>Исмаил.</b>
				<br />И это мой <b className={isDark ? 'dark' : 'light'}>портфолио!</b>
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
					Я начинающий фронтенд-разработчик, нахожусь на уровне junior и продолжаю развиваться. За год
					изучения сферы web-разработки, а также современных технологий, я достаточно многому научился, и это
					не предел.
				</AboutSection>

				<AboutSection>
					На момент разработки данного проекта, я продолжаю осваивать новые инструменты, постепенно усложняя
					проекты и улучшая качество своей работы.
				</AboutSection>

				<AboutSection>
					Этот сайт — часть моего индивидуального проекта и одновременно личное портфолио, где я демонстрирую
					процесс разработки, используемые технологии, дизайн и подход к созданию SPA-приложения.
				</AboutSection>

				<AboutSection>
					В будущем я намерен углубиться в область фронтенд-разработки, а также совершенствовать свои
					способности в дизайне интерфейсов и архитектуре приложений. Кроме того, я планирую интегрировать
					сюда и другие свои проекты.
				</AboutSection>
			</motion.section>
		</motion.section>
	)
}

export default About
