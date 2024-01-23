import { Languages, LOCAL_STORAGE_LANGUAGE_KEY } from "shared/types/types";

export const getLanguageFromLS = () => {
	const data = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY);
	const lang = data ? data : Languages.RU;
	return lang;
};
