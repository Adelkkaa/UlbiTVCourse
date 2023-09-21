import type { FC } from 'react';

import classNames from 'shared/lib/classnames';
import { Loader } from 'shared/ui/Loader';

import classes from './PageLoader.module.scss';

export const PageLoader: FC<PropsWithClassName> = ({ className }) => (
	<div className={classNames(classes.pageLoader, {}, [className])}>
		<Loader />
	</div>
);
