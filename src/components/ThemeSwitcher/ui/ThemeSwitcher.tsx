import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './ThemeSwitcher.module.scss';
import { Switch } from "components/Switch";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from 'redux/store';
import { setTheme } from 'redux/setting/slice';
import { selectSetting } from 'redux/setting/selectors';
import { Themes, LOCAL_STORAGE_THEME_KEY } from 'shared/types/types';

export const ThemeSwitcher = () => {

	const { theme } = useSelector(selectSetting);
	const [value, setValue] = useState(theme === Themes.DARK ? true : false);
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const changeTheme = value ? Themes.DARK : Themes.LIGHT;
		dispatch(setTheme(changeTheme));
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, changeTheme);
	}, [value]);

	return (
		<div className={cls.content}>
			<p>
				{t('Тема')}:
			</p>
			<div className={cls.switch}>
				<span>
					{t('Светлая')}
				</span>
				<Switch
					isOn={value}
					id='theme-switcher'
					handleToggle={setValue}
				/>
				<span className={cls.lang}>
					{t('Тёмная')}
				</span>
			</div>
		</div>
	);
};
