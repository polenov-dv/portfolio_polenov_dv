import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './LangSwitcher.module.scss';
import { Switch } from "components/Switch";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from 'redux/store';
import { setLanguage } from 'redux/setting/slice';
import { selectSetting } from 'redux/setting/selectors';
import { Languages, LOCAL_STORAGE_LANGUAGE_KEY } from 'shared/types/types';

export const LangSwitcher = () => {

	const { language } = useSelector(selectSetting);
	const [value, setValue] = useState(language === Languages.RU ? true : false);
	const { t, i18n } = useTranslation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const lang = value ? Languages.RU : Languages.EN;
		i18n.changeLanguage(lang);
		dispatch(setLanguage(lang));
		localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, lang);
	}, [value]);

	return (
		<div className={cls.content}>
			<p>
				{t('Язык')}:
			</p>
			<div className={cls.switch}>
				<span>EN</span>
				<Switch
					isOn={value}
					id='lang-switcher'
					handleToggle={setValue}
				/>
				<span>RU</span>
			</div>
		</div>
	);
};
