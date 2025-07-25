import style from './Home.module.css'
import { MouseParallax } from 'react-just-parallax'
type TMouseParallax = {
	enableOnTouchDevice?: boolean
	strength: number
	lerpEase: number
	shouldResetPosition?: boolean
}
const Home = () => {
	const parallaxConfig: TMouseParallax = {
		enableOnTouchDevice: true,
		strength: 0.03,
		lerpEase: 0.09,
		shouldResetPosition: true,
	}
	return (
		<>
			<div className={style['home__page']}>
				<MouseParallax {...parallaxConfig}>
					<h1 className={style['home__page-title']}>
						Добро пожаловать в Coffee Nook
					</h1>
				</MouseParallax>
				<p className={style['home__page-subtitle']}>
					Погрузитесь в мир насыщенных ароматов и утонченных <br />
					вкусов настоящего кофе вместе с нами!
				</p>

				<img
					className={style['coffee_beans']}
					src='/src/assets/icons/coffeebeans.png'
					alt=''
				/>
			</div>
		</>
	)
}
export default Home
