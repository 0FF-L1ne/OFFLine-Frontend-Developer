import Modal from '../UI/modal/Modal'
import BurgerMenu from './../UI/burger-menu/BurgerMenu'
import './Page.css'

const Page = ({ children }) => {
	return (
		<div className='page'>
			<BurgerMenu />
			<Modal />
			{children}
		</div>
	)
}

export default Page
