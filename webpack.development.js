const {merge} = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 8083,
      },
    devServer:{
        client:{
            logging: "info",
            overlay: true
        }, 
        compress: true,
        open: true,
        static: './build',
    },
    stats: {
        errorDetails: true,
        loggingDebug: ['sass-loader'],
    }
})