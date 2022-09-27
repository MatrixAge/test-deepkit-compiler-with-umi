import { join } from 'path'

import * as typeCompiler from '@deepkit/type-compiler'
import { defineConfig } from '@umijs/max'

export default defineConfig({
	npmClient: 'pnpm',
	conventionRoutes: {
		exclude: [
			/model\.(j|t)sx?$/,
			/services\.(j|t)sx?$/,
			/types\.(j|t)sx?$/,
			/hooks\.(j|t)sx?$/,
			/locales\.(j|t)sx?$/,
			/components\//,
			/hooks\//,
			/locales\//,
			/_(.*)$/
		]
	},
	mfsu: { esbuild: true },
	locale: { default: 'zh-CN' },
	antd: { import: false, style: undefined },
	// @ts-ignore
	chainWebpack(config: any) {
		config.module
			.rule('jsx-ts-tsx')
			.use('ts-loader')
			.loader(require.resolve('ts-loader'))
			.after('babel-loader')
			.options({
				getCustomTransformers: () => ({
					before: [
						require('react-refresh-typescript')(),
						typeCompiler.transformer
					],
					afterDeclarations: [typeCompiler.declarationTransformer]
				}),
				configFile: join(__dirname, './tsconfig.json')
			})
	}
})
