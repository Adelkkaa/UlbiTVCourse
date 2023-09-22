import { useState } from 'react';
import type { FC } from 'react';

import classes from './Sidebar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import classNames from 'shared/lib/classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
export const Sidebar: FC<PropsWithClassName> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			className={classNames(
				classes.Sidebar,
				{ [classes.collapsed]: collapsed },
				[className],
			)}
			data-testid='sidebar'
		>
			<Button data-testid='toggleButton' onClick={onToggle}>
				{t('Загрузка')}
			</Button>
			<div className={classes.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
