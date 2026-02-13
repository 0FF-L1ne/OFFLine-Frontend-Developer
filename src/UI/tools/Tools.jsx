import ViteIcon from './../../assets/tools-icons/vite.svg?react'
import ReactIcon from './../../assets/tools-icons/react.svg?react'
import JsIcon from './../../assets/tools-icons/javascript.svg?react'
import SassIcon from './../../assets/tools-icons/sass.svg?react'
import AntIcon from './../../assets/tools-icons/antdesign.svg?react'
import PostCssIcon from './../../assets/tools-icons/postcss.svg?react'
import { useTheme } from '../../context/ThemeContext'
import './Tools.css'

const Tools = () => {
	const { isDark } = useTheme()

	const tools = [
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
