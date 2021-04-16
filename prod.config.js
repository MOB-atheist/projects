const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const WebpackAssetsManifest = require('webpack-assets-manifest');

const path = require('path')

module.exports = {
    mode: 'production',
    entry: './main.js',
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'docs/assets'),
        filename: '[name]-[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MOB-atheist projects',
            filename: '../index.html',
            template: './index.html',
        }),
        new VueLoaderPlugin(),
        new WebpackAssetsManifest(),
    ],
}
