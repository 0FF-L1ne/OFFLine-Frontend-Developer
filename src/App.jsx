import { useEffect } from 'react'
import { usePreloader } from './context/PreloaderContext'
import Preloader from './UI/preloader/Preloader'
import Page from './page/Page'
import Header from './components/layout/header/Header'
import Content from './components/layout/content/Content'
import Footer from './components/layout/footer/Footer'
import './App.css'

const App = () => {
	const { isLoading } = usePreloader()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const categories = [
		{ id: 'about', name: 'Обо мне', path: '#about' },
		{ id: 'portfolio', name: 'Портфолио', path: '#portfolio' },
		{ id: 'skills', name: 'Навыки', path: '#skills' },
		{ id: 'contacts', name: 'Контакты', path: '#contacts' },
	]

	return (
		<div className='App'>
			{isLoading ? (
				<Preloader />
			) : (
				<Page>
					<Header categories={categories} />
					<Content />
					<Footer />
				</Page>
			)}
		</div>
	)
}

export default App
