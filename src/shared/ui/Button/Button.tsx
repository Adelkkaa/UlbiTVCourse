import { type ButtonHTMLAttributes, type FC } from 'react';
import classes from './Button.module.scss';
import classNames from 'shared/lib/classnames';

export enum ThemeButton {
	CLEAR = 'clear',
}

type ButtonProps = {
	theme?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<PropsWithClassName<ButtonProps>> = ({
	className,
	children,
	theme = ThemeButton.CLEAR,
	...otherProps
}) => (
	<button
		className={classNames(classes.Button, {}, [className, classes[theme]])}
		{...otherProps}
	>
		{children}
	</button>
);
