const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const paths = require("./paths");

module.exports = {
    entry: {
        main: `./${paths.src}/index.ts`,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path:     path.resolve(__dirname, paths.prod),
        filename: "[name].[chunkhash].js",
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test:    /\.ts?$/,
                use:     "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(sass|scss|css)$/,
                use:  [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, paths.prod), {
            root: process.cwd(),
        }),
        new MiniCssExtractPlugin({
            filename: "style.[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            inject:   false,
            hash:     false,
            template: `./${paths.src}/index.html`,
            filename: "index.html",
        }),
        new WebpackMd5Hash(),
    ],
};
