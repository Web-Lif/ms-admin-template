import FastpackPluginBabelImport from '@weblif/plugin-babel-import'
import FastpackPluginLessLoader from '@weblif/plugin-less-loader'
// @ts-ignore
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin'

import { resolve } from 'path'

/**
 * 扩展 Webpack 的信息
 */
class WebpackChainPlugin {
    after(webpack: any) {
        webpack.plugin('fastpack/ESLintPlugin').use(ESLintPlugin)
        webpack.plugin('fastpack/AntdDayjsWebpackPlugin').use(AntdDayjsWebpackPlugin)
    }
}

export default {
    title: 'test',
    router: {
        paths: [
            '/',
            '/User/Login',
            '/welcome'
        ],
        notFound: '/components/NotFound',
        loading: '/components/Loading',
        layout: '/layouts'
    },
    plugins: [
        new FastpackPluginBabelImport([{"libraryName": "antd",  "style": true, libraryDirectory: 'es' }]),
        new FastpackPluginLessLoader({
            lessOptions: {
                javascriptEnabled: true,
            }
        }),
        new WebpackChainPlugin()
    ],
}