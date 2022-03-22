const path = require('path');
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const { GenerateSW } = require("workbox-webpack-plugin");
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
            template: path.resolve('public', 'index.html')
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyPlugin({
            patterns: [
              { from: "public/manifest.json", to: "." },
              { from: "public/favicon.ico", to: "." },
              { from: "public/img/logo*", to: () => "./assets/img/[name][ext]" },
            ],
        }),
    ];

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin());
        plugins.push(new GenerateSW({
            maximumFileSizeToCacheInBytes: 1024 * 1024 * 10
        }));
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
            // Permitir usar modulos CSS
            test: /\.css$/,
            use: [ isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
            include:  /\.module\.css$/i,
            exclude: /node_modules/
        },
        {
            // Permitir usar CSS
            test: /\.css$/,
            use: [ isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
            exclude: [ /node_modules/, /\.module\.css$/i ]
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