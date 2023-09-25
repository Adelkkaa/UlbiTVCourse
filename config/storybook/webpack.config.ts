import type webpack from 'webpack';

import type { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

module.exports = ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};
	const cssLoader = buildCssLoader(true);
	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.ts', '.tsx');
	config.module.rules.push(cssLoader);

	return config;
};
