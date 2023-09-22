import { useTranslation } from 'react-i18next';
import classes from './PageError.module.scss';
import { Button } from 'shared/ui/Button/Button';
export const PageError = () => {
	const { t } = useTranslation();

	const handleClickReload = () => {
		location.reload();
	};

	return (
		<div className={classes.pageError}>
			<h1 className={classes.pageErrorTitle}>{t('Предохранитель')}</h1>
			<Button className={classes.pageErrorButton} onClick={handleClickReload}>
				{t('Перезагрузка')}
			</Button>
		</div>
	);
};
