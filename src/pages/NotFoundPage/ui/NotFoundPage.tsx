import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
	const { t } = useTranslation();
	return (
		<div className={classes.notFoundPage}>
			<h1 className={classes.notFoundPageTitle}>{t('Страница не найдена')}</h1>
		</div>
	);
};
