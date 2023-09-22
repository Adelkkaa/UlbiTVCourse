import classNames from 'shared/lib/classnames';
import classes from './Navbar.module.scss';
import { type FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from 'shared/config/routeConfig';

type NavbarProps = {
	className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation('translation');

	return (
		<nav className={classNames(classes.navbar, {}, [className])}>
			<div className={classes.navbarLinks}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					className={classes.navbarMainLink}
					to={'/'}
				>
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT}>
					{t('О нас')}
				</AppLink>
			</div>
		</nav>
	);
};
