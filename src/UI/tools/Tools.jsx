import { useTheme } from '../../context/ThemeContext'
import './Tools.css'

const Tools = ({ tools }) => {
	const { isDark } = useTheme()

	return (
		<section className='project-tools'>
			{tools.map(({ id, Icon }) => (
				<div
					className='tool'
					key={id}
					style={{
						background: isDark ? 'var(--bg-dark)' : 'var(--default-color)',
						color: isDark ? 'var(--text-light)' : 'var(--text-dark)',
					}}
				>
					<Icon style={{ scale: 1.15 }} />
				</div>
			))}
		</section>
	)
}

export default Tools
