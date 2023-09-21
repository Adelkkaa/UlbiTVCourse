import type { FC } from 'react';

import './Loader.scss';
import classNames from 'shared/lib/classnames';
export const Loader: FC<PropsWithClassName> = ({ className }) => (
	<div className={classNames('lds-ellipsis', {}, [className])}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);
