import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { type BuildOptions } from './types/config';
import type webpack from 'webpack';

export function buildWebpackConfig(
	options: BuildOptions,
): webpack.Configuration {
	const { mode, paths, isDev } = options;
	return {
		mode,
		entry: paths.entry,
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
	};
}
