import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Menu from './NavMenu/Menu'
import Home from './NavHome/Home'
import Team from './NavTeam/Team'
import Contacts from './NavContacts/Contacts'
import About from './NavAbout/About'
import styles from './HeaderNav.module.css'
import Stock from './NavStock/Stock'
const HeaderNav = () => {
	return (
		<>
			<Router>
				<nav className={styles['header-nav']}>
					<ul className={styles['header-nav__list']}>
						<img
							className={styles['header-logo']}
							src='/src/assets/icons/iconsheader/logo.png'
						></img>
						<li className={styles['header-nav__item']}>
							<Link className={styles['header-nav__link']} to='/'>
								Главная
							</Link>
						</li>
						<li className={styles['header-nav__item']}>
							<Link className={styles['header-nav__link']} to='/menu'>
								Меню
							</Link>
						</li>
						<li className={styles['header-nav__item']}>
							<Link className={styles['header-nav__link']} to='/team'>
								Наша команда
							</Link>
						</li>
						<li className={styles['header-nav__item']}>
							<Link className={styles['header-nav__link']} to='/stock'>
								Акции
							</Link>
						</li>
						<li className={styles['header-nav__item']}>
							<Link className={styles['header-nav__link']} to='/contacts'>
								Контакты
							</Link>
						</li>
						<li className={styles['header-nav__item']}>
							<Link className={styles['header-nav__link']} to='/about'>
								О нас
							</Link>
						</li>
						<button>
							<img
								className={styles['header-basket']}
								src='/src/assets/icons/iconsheader/basket.png'
							></img>
						</button>
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/team' element={<Team />} />
					<Route path='/stock' element={<Stock />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</Router>
		</>
	)
}

export default HeaderNav
