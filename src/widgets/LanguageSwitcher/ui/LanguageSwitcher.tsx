import { type FC } from 'react';
import classNames from 'shared/lib/classnames';

import { Button } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: FC<PropsWithClassName> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			className={classNames('', {}, [className])}
			onClick={toggleLanguage}
		>
			{t('Язык')}
		</Button>
	);
};
