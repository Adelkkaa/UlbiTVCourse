import React, { Children, type FC } from 'react';
import classes from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import classNames from 'shared/lib/classnames';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	theme?: string;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = ({
	className,
	to,
	children,
	theme = AppLinkTheme.PRIMARY,
	...otherProps
}) => (
	<Link
		className={classNames(classes.AppLink, {}, [className, classes[theme]])}
		to={to}
		{...otherProps}
	>
		{children}
	</Link>
);
