import { memo } from 'react'
import Point from '../../../../../../UI/point/Point'
import { motion } from 'framer-motion'
import './SkillsSection.css'

const SkillsSection = ({ cards, style }) => {
	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
				delay: 0.3,
			},
		},
	}

	const item = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<motion.section
			className='section-container'
			variants={container}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
		>
			{cards.map((card, index) => (
				<motion.article
					className='skill-card'
					key={index}
					variants={item}
					style={style}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					<section className='skills-content'>
						<Point className='point' />
						<p className='skill'>{card}</p>
					</section>
				</motion.article>
			))}
		</motion.section>
	)
}

export default memo(SkillsSection)
