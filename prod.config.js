const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

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
        ],
    },
    output: {
        path: path.resolve(__dirname, 'docs/assets'),
        filename: 'script.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MOB-atheist projects',
            filename: '../index.html',
            template: './index.html',
        }),
        new VueLoaderPlugin()
    ],
}
