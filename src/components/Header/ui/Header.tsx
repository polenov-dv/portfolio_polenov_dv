import { useState } from 'react';
import cls from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import myPhoto from 'shared/assets/images/photo.jpg';
import Github from 'shared/assets/icon/github.svg';
import Telegram from 'shared/assets/icon/telegram.svg';
import Vk from 'shared/assets/icon/vk.svg';
import Whatsapp from 'shared/assets/icon/whatsapp.svg';
import { useLocation } from 'react-router-dom';
import { getScrollPosition } from 'utils/getScrollPosition';

interface HeaderProps {
	scroll: number;
}

export const Header = ({ scroll }: HeaderProps) => {

	const { t } = useTranslation();
	const { hash } = useLocation();
	const [openMenu, setOpenMenu] = useState(false);

	const nav_list = openMenu
		? cls.menu_list_active
		: cls.menu_list;

	const btn = openMenu
		? cls.menu_btn + ' ' + cls.menu_btn_active
		: cls.menu_btn;
	return (
		<header className={cls.header}>
			<div className={cls.wrapper}>
				<a href="#main-path" className={cls.top_content}>
					<img className={cls.photo} src={myPhoto} alt="Фото" />
					<p className={cls.name}>
						{t('Поленов Дмитрий')}
					</p>
				</a>
				<nav className={cls.menu_nav}>
					<ul className={nav_list}>
						<li className={cls.nav_item}>
							<a
								href="#main-path"
								className={scroll < getScrollPosition('about-path') ? cls.link_active : cls.link}
								onClick={() => setOpenMenu(false)}
							>
								{t('Главная')}
							</a>
						</li>
						<li className={cls.nav_item}>
							<a
								href="#about-path"
								className={scroll >= getScrollPosition('about-path') && scroll < getScrollPosition('resume-path') ? cls.link_active : cls.link}
								onClick={() => setOpenMenu(false)}
							>
								{t('Обо мне')}
							</a>
						</li>
						<li className={cls.nav_item}>
							<a
								href="#resume-path"
								className={scroll >= getScrollPosition('resume-path') && scroll < getScrollPosition('portfolio-path') ? cls.link_active : cls.link}
								onClick={() => setOpenMenu(false)}
							>
								{t('Резюме')}
							</a>
						</li>
						<li className={cls.nav_item}>
							<a
								href="#portfolio-path"
								className={scroll >= getScrollPosition('portfolio-path') && scroll < getScrollPosition('contacts-path') ? cls.link_active : cls.link}
								onClick={() => setOpenMenu(false)}
							>
								{t('Портфолио')}
							</a>
						</li>
						<li className={cls.nav_item}>
							<a
								href="#contacts-path"
								className={scroll >= getScrollPosition('contacts-path') ? cls.link_active : cls.link}
								onClick={() => setOpenMenu(false)}
							>
								{t('Контакты')}
							</a>
						</li>
					</ul>

					<ul className={cls.social_list}>
						<li className={cls.social_item}>
							<a href="https://vk.com/id272160444">
								<Vk className={cls.social_icon} />
							</a>
						</li>
						<li className={cls.social_item}>
							<a href="https://wa.me/+79595243430">
								<Whatsapp className={cls.social_icon} />
							</a>
						</li>
						<li className={cls.social_item}>
							<a href="https://t.me/+79595243430">
								<Telegram className={cls.social_icon} />
							</a>
						</li>
						<li className={`${cls.social_item} ${cls.github}`}>
							<a href="https://github.com/polenov-dv">
								<Github className={cls.social_icon} />
							</a>
						</li>
					</ul>

					<div onClick={() => setOpenMenu(!openMenu)} className={btn}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
};
