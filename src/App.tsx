import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Contacts from './components/Contacts/Contacts'
import './fonts/fonts.css'
import About from './components/About/About'
import Header from './components/Header/Header'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>
		</>
	)
}

export default App
