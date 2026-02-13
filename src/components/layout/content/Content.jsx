import About from './sections/about/About'
import Portfolio from './sections/portfolio/Portfolio'
import Skills from './sections/skills/Skills'
import './Content.css'

const Content = () => {
	return (
		<main className='content'>
			<About />
			<Portfolio />
			<Skills />
		</main>
	)
}

export default Content
