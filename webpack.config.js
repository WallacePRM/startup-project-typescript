const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (config) => {

    const isDev = !config.production;
    const isProd = config.production;

    return {
        mode: isDev ? 'development' : 'production',
        entry: './src/index.ts',
        output: {
            filename: 'main.bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        module: {
            rules: getRules({ isDev, isProd })
        },
        plugins: getPlugins({ isDev, isProd }),
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.css']
        }
    };
}

function getPlugins({ isDev, isProd }) {

    const plugins = [
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html')
        })
    ];

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin());
    }

    return plugins;
}

function getRules({ isDev, isProd }) {

    const rules =  [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [ isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
            // More information here https://webpack.js.org/guides/asset-modules/
            type: "asset",
            exclude: /node_modules/
        },
    ];

    return rules;
}