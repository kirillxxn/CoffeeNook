import HeaderNav from './HeaderNav/HeaderNav'
import styles from './Header.module.css'
const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles['header-container']}></div>

				<HeaderNav />
			</header>
		</>
	)
}
export default Header
