import Networks from '../../../../../../UI/networks/Networks'
import { motion } from 'framer-motion'
import './ContactsSection.css'

const ContactsSection = ({ isDark }) => {
	const item = {
		hidden: { opacity: 0, y: -30 },
		visible: { opacity: 1, y: 0 },
	}
	return (
		<motion.article
			className='contacts-section'
			variants={item}
			viewport={{ once: true }}
			initial='hidden'
			whileInView='visible'
			transition={{ delay: 0.5, duration: 1 }}
			style={{ background: isDark ? 'var(--bg-section-dark)' : 'var(--bg-section-light)' }}
		>
			<section className='networks-section'>
				<h1
					className='description-label'
					style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)' }}
				>
					Как со мной{' '}
					<b style={{ color: isDark ? 'var(--dark-green-color)' : 'var(--light-green-color)' }}>связаться?</b>
				</h1>
				<Networks />
			</section>

			<section className='description' style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)' }}>
				<p>
					Со мной можно связаться в моих <br />
					<b style={{ color: isDark ? 'var(--dark-green-color)' : 'var(--light-green-color)' }}>
						социальных сетях.
					</b>
				</p>
			</section>
			<div style={{ color: isDark ? 'var(--text-light)' : 'var(--text-dark)' }} className='signature'>
				<p>© OFFLine, 2026</p>
			</div>
		</motion.article>
	)
}

export default ContactsSection
