import React from 'react';
import cls from './Switcher.module.scss';
import { LangSwitcher } from 'components/LangSwitcher';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import Setting from 'shared/assets/icon/settings.svg';

interface SwitcherProps {
	status: boolean;
	open: (status: boolean) => void;
}

export const Switcher = ({ status, open }: SwitcherProps) => {
	return (
		<div className={cls.content}>
			<div
				className={cls.icon_wrapper}
				onClick={() => open(!status)}
			>
				<Setting className={cls.icon_setting} />
			</div>
			<LangSwitcher />
			<ThemeSwitcher />
		</div>
	);
};
