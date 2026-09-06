import { useTheme } from '../../../../../context/ThemeContext'
import PortfolioSection from './portfolio-section/PortfolioSection'
import cryptoCup from './../../../../../assets/cryptocup.webp'
import Mira from '../../../../../assets/Mira.jpg?react'
import Tools from '../../../../../UI/tools/Tools'
import { motion } from 'framer-motion'
import ViteIcon from '../../../../../assets/tools-icons/vite.svg?react'
import ReactIcon from '../../../../../assets/tools-icons/react.svg?react'
import JsIcon from '../../../../../assets/tools-icons/javascript.svg?react'
import SassIcon from '../../../../../assets/tools-icons/sass.svg?react'
import AntIcon from '../../../../../assets/tools-icons/antdesign.svg?react'
import PostCssIcon from '../../../../../assets/tools-icons/postcss.svg?react'
import Python from '../../../../../assets/tools-icons/python.svg?react'
import ClaudeCode from '../../../../../assets/tools-icons/claudecode.svg?react'
import Claude from '../../../../../assets/tools-icons/claude.svg?react'
import DeepSeek from '../../../../../assets/tools-icons/deepseek.svg?react'
import ChatGpt from '../../../../../assets/tools-icons/chatgpt.svg?react'
import Telegram from '../../../../../assets/tools-icons/telegram.svg?react'
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

	const mira_tools = [
		{
			id: 'python',
			Icon: Python,
		},
		{
			id: 'claudecode',
			Icon: ClaudeCode,
		},
		{
			id: 'claude',
			Icon: Claude,
		},
		{
			id: 'chatgpt',
			Icon: ChatGpt,
		},
		{
			id: 'deepseek',
			Icon: DeepSeek,
		},
		{
			id: 'telegram',
			Icon: Telegram,
		},
	]

	const crypto_tools = [
		{
			id: 'javascript',
			Icon: JsIcon,
		},
		{
			id: 'vite',
			Icon: ViteIcon,
		},
		{
			id: 'react',
			Icon: ReactIcon,
		},
		{
			id: 'postcss',
			Icon: PostCssIcon,
		},
		{
			id: 'sass',
			Icon: SassIcon,
		},
		{
			id: 'antdesign',
			Icon: AntIcon,
		},
	]

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
				Портфолио
			</motion.h1>

			<motion.section
				className='portfolio-sections'
				variants={container}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.4 }}
			>
				<PortfolioSection
					year='July 2026 - August 2026'
					title='Mira AI'
					image={Mira}
					description='Mira AI — персональный AI-ассистент для автоматизации клиентского общения в Telegram. Обрабатывает запросы, собирает заявки и сохраняет контекст каждого клиента. Работает на основе нейросети DeepSeek V4 Flash.'
					tools={<Tools tools={mira_tools}></Tools>}
				/>
				<PortfolioSection
					year='October 2025 - November 2025'
					title='Crypto Cup'
					image={cryptoCup}
					description='Данный проект был разработан исключительно в учебных целях; он напоминает криптовалютную биржу, но база данных в нем не настоящая.'
					tools={<Tools tools={crypto_tools}></Tools>}
				/>
			</motion.section>
		</motion.section>
	)
}

export default Portfolio
