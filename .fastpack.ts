import FastpackPluginBabelImport from '@weblif/plugin-babel-import'
import FastpackPluginLessLoader from '@weblif/plugin-less-loader'
// @ts-ignore
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin'
import { getFastpackConfig } from '@weblif/fastpack'

/**
 * 扩展 Webpack 的信息
 */
class WebpackChainPlugin {
    after(webpack: any) {
        webpack.plugin('fastpack/ESLintPlugin').use(ESLintPlugin, [{
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        }])
        webpack.plugin('fastpack/AntdDayjsWebpackPlugin').use(AntdDayjsWebpackPlugin)
    }
}

export default getFastpackConfig({
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
    publicPath: '/ms-template',
    plugins: [
        new FastpackPluginBabelImport([{"libraryName": "antd",  "style": true, libraryDirectory: 'es' }] as any),
        new FastpackPluginLessLoader({}),
        new WebpackChainPlugin()
    ],
    links: [
    ]
})