import { Themes, LOCAL_STORAGE_THEME_KEY } from "shared/types/types";

export const getThemeFromLS = () => {
	const data = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
	const theme = data ? data : Themes.LIGHT;
	return theme;
};
