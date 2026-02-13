import App from './App'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import { PreloaderProvider } from './context/PreloaderContext'
import { MenuProvider } from './context/MenuContext'
import { ModalProvider } from './context/ModalContext'
import './styles/index'

createRoot(document.getElementById('root')).render(
	<ThemeProvider>
		<PreloaderProvider>
			<MenuProvider>
				<ModalProvider>
					<App />
				</ModalProvider>
			</MenuProvider>
		</PreloaderProvider>
	</ThemeProvider>,
)
