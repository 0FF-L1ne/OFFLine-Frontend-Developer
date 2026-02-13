import { useTheme } from '../../../../../context/ThemeContext'
import ContactsSection from './contacts-section/ContactsSection'
import { motion } from 'framer-motion'
import './Contacts.css'

const Contacts = () => {
	const { isDark } = useTheme()

	return (
		<motion.section className='contacts' id='contacts'>
			<ContactsSection isDark={isDark} />
		</motion.section>
	)
}

export default Contacts
