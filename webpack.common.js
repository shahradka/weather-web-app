const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
                type: 'asset/images',
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/fonts',
              },
        ]
    },
    resolve:{
        extensions: [".tsx", ".ts", ".js"],
          alias: {
            ["@components"]: path.resolve(__dirname, 'src/components/'),
            ["@redux"]: path.resolve(__dirname, 'src/redux/'),
          },
    },
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ]
}