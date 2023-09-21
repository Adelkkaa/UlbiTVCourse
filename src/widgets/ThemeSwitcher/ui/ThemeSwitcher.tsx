import { type FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classnames';

import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui/Button/Button';

export const ThemeSwitcher: FC<PropsWithClassName> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button className={classNames('', {}, [className])} onClick={toggleTheme}>
			{theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
		</Button>
	);
};
