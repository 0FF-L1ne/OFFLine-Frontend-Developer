import { useTheme } from '../../context/ThemeContext'
import { BsGithub, BsTelegram } from 'react-icons/bs'
import { motion } from 'framer-motion'
import './Networks.css'

const Networks = () => {
	const { isDark } = useTheme()
	const networks = [
		{
			id: 'github',
			Icon: BsGithub,
			url: 'https://github.com/0FF-L1ne',
			color: 'var(--dark-green-color)',
		},
		{
			id: 'telegram',
			Icon: BsTelegram,
			url: 'https://t.me/R_HE3HAIO',
			color: 'var(--dark-green-color)',
		},
	]
	return (
		<section className='social-networks'>
			{networks.map(({ id, url, Icon, color }) => (
				<motion.a
					whileHover={{ color }}
					href={url}
					className='network'
					aria-label={id}
					key={id}
					target='_blank'
					rel='noopener noreferer'
					style={{
						background: isDark ? 'var(--bg-dark)' : 'var(--default-color)',
						color: isDark ? 'var(--text-light)' : 'var(--text-dark)',
					}}
				>
					<Icon
						style={{
							scale: 3,
							marginTop: '0.05rem',
						}}
					/>
				</motion.a>
			))}
		</section>
	)
}

export default Networks
