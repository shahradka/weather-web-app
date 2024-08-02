const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack");



module.exports = {
    entry: './src/index.tsx',
    module:{
        rules:[
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
                
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                  ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ]
    },
    resolve:{
        extensions: [".tsx", ".ts", ".js"],
          alias: {
            ["@components"]: path.resolve(__dirname, 'src/components/'),
            ["@redux"]: path.resolve(__dirname, 'src/redux/'),
            ["@sass"]: path.resolve(__dirname, 'src/css/sass'),
          },
    },
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
        new Dotenv({
          path: './.env',
          safe: true,
        }),
      ]
}