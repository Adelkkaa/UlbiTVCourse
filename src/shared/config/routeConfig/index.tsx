import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOTFOUND = 'error',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOTFOUND]: '*',
};

export const routeConfig: RouteProps[] = [
	{ path: RoutePath[AppRoutes.MAIN], element: <MainPage /> },
	{ path: RoutePath[AppRoutes.ABOUT], element: <AboutPage /> },
	{ path: RoutePath[AppRoutes.NOTFOUND], element: <NotFoundPage /> },
];
