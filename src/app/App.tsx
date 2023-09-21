import { Suspense } from 'react';

import classNames from 'shared/lib/classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

import { Navbar } from 'widgets/Navbar';

import './styles/styles.scss';

const App = () => {
	const { theme } = useTheme();
	return (
		<Suspense fallback=''>
			<div className={classNames('app', {}, [theme])}>
				<Navbar />
				<div className='content'>
					<Sidebar />
					<AppRouter />
				</div>
			</div>
		</Suspense>
	);
};

export default App;
