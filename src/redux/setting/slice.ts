import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { settingSliceState } from "./types";
import { Themes, Languages } from "shared/types/types";
import { getLanguageFromLS } from "utils/getLanguageFromLS";
import { getThemeFromLS } from "utils/getThemeFromLS";

const initialState: settingSliceState = {
	theme: getThemeFromLS(),
	language: getLanguageFromLS()
}

const stateSlice = createSlice({
	name: 'setting',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Themes>) => {
			state.theme = action.payload;
		},
		setLanguage: (state, action: PayloadAction<Languages>) => {
			state.language = action.payload;
		},
	}
});

export const { setTheme, setLanguage } = stateSlice.actions;
export default stateSlice.reducer;
