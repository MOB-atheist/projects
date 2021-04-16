const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const path = require('path')

module.exports = {
    mode: 'development',
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
        path: path.resolve(__dirname, 'build'),
        filename: 'script.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MOB-atheist projects',
            filename: 'index.html',
            template: './index.html',
        }),
        new VueLoaderPlugin(),
    ],
}
