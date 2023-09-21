import React, { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

type UseThemeResult = {
	theme: Theme;
	toggleTheme: () => void;
};

export const useTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const themeResult = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme(themeResult);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeResult);
	};

	return { theme, toggleTheme };
};
