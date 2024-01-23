import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {

	return [
		//Плагин формирования index.html
		new HTMLWebpackPlugin({
			template: paths.html
		}),

		//Плагин отображения процентной сборки проекта
		new webpack.ProgressPlugin(),

		//Плагин формирования отдельных css файлов
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),

		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),

		new CopyPlugin({
			patterns: [
				{ from: paths.locales, to: paths.buildLocales },
			],
		})
	]
}