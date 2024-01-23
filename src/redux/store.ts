import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import setting from 'redux/setting/slice';

export const store = configureStore({
	reducer: {
		setting,
	}
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();