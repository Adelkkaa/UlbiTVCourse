import classNames from 'shared/lib/classnames';
import classes from './Navbar.module.scss';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

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
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
					{t('О нас')}
				</AppLink>
			</div>
		</nav>
	);
};
