import FastpackPluginLessLoader from '@weblif/plugin-less-loader'
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
        webpack.module
            .rule('fastpack/typescript')
            .use('fastpack/swc-loader')
            .loader(require.resolve('swc-loader'))
            .tap((options: any) => (
                {
                    jsc: {
                        ...options.jsc,
                        transform: {
                            react: {
                                ...options.jsc.transform.react,
                                importSource: "@emotion/react"
                            },
                        },
                    },
                }
            ))
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
    plugins: [
        new FastpackPluginLessLoader({}),
        new WebpackChainPlugin()
    ],
    links: [
        // 'test@http://127.0.0.1:8085/fastpack.share.js'
    ]
})