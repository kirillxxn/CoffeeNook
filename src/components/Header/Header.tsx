import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles['header']}>
			<div className={styles['header__container']}>
				<div className={styles['header__logo']}>
					<span className={styles['header__logo-coffee']}>
						Coffee<span className={styles['header__logo-nook']}>Nook</span>
					</span>
				</div>
				<nav className={styles['header__nav']}>
					<ul className={styles['header__nav-list']}>
						<li className={styles['header__nav-item']}>
							<Link className={styles['header__nav-link']} to='/'>
								<img
									className={styles['header__icon']}
									src='/src/assets/icons/homeicon.png'
									alt='Иконка для перехода на главную'
								/>
								Главная
							</Link>
						</li>
						<li className={styles['header__nav-item']}>
							<Link className={styles['header__nav-link']} to='/menu'>
								<img
									className={styles['header__icon']}
									src='/src/assets/icons/menuicon.png'
									alt='Иконка для перехода в раздел меню'
								/>
								Меню
							</Link>
						</li>
						<li className={styles['header__nav-item']}>
							<Link className={styles['header__nav-link']} to='/contacts'>
								<img
									className={styles['header__icon']}
									src='/src/assets/icons/phoneicon.png'
									alt='Иконка для перехода в раздел контакты'
								/>
								Контакты
							</Link>
						</li>
						<li className={styles['header__nav-item']}>
							<Link className={styles['header__nav-link']} to='/about'>
								<img
									className={styles['header__icon']}
									src='/src/assets/icons/abouticon.png'
									alt='Иконка для перехода в раздел о нас'
								/>
								О нас
							</Link>
						</li>
					</ul>
				</nav>
				<div className={styles['header__button']}>
					<button className={styles['button__profile']}>
						<img
							className={styles['header__icon']}
							src='/src/assets/icons/profileicon.png'
							alt='Иконка для перехода в профиль'
						/>
					</button>
					<button className={styles['button__basket']}>
						<img
							className={styles['header__icon']}
							src='/src/assets/icons/basketicon.png'
							alt='Иконка для перехода в корзину'
						/>
						<span className={styles['basket__count']}>0</span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
