import { useTheme } from '../../../../../../context/ThemeContext'
import { useModal } from '../../../../../../context/ModalContext'
import Tools from '../../../../../../UI/tools/Tools'
import Divider from '../../../../../../UI/Divider'
import { motion } from 'framer-motion'
import './PortfolioSection.css'

const PortfolioSection = ({ title, description, year, image }) => {
	const { isDark } = useTheme()
	const { openModal } = useModal()

	const item = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<motion.article
			className='portfolio-section'
			variants={item}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			style={{
				background: isDark ? 'var(--bg-section-dark)' : 'var(--bg-section-light)',
				color: isDark ? 'var(--text-light)' : 'var(--text-dark)',
			}}
		>
			<section className='portfolio-content'>
				<img
					src={image}
					alt={title}
					className='project-img'
					onClick={() => openModal(<img src={image} alt={title} />)}
					style={{ background: isDark ? 'var(--bg-dark)' : 'var(--default-color)' }}
				/>
				<div className='project-info'>
					<h2 className='project-name'>
						<a
							href='https://cryptocup.vercel.app'
							target='_blank'
							rel='noopener noreferer'
							style={{
								textDecoration: 'none',
								color: isDark ? 'var(--dark-green-color)' : 'var(--text-dark)',
							}}
						>
							{title}
						</a>
						<span
							className='project-year'
							style={{
								color: isDark ? 'var(--dark-green-color)' : 'var(--text-dark)',
								fontWeight: 300,
							}}
						>
							<div className='period'>{year.replace(' - ', ' -\n')}</div>
						</span>
					</h2>

					<p className='project-description'>{description}</p>

					<Divider
						className='divider'
						style={{ borderColor: isDark ? 'var(--dark-color-divider)' : 'var(--color-divider)' }}
					/>

					<Tools />
				</div>
			</section>
		</motion.article>
	)
}

export default PortfolioSection
