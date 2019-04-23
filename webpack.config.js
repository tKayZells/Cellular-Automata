const path = require('path')
const html = require('html-webpack-plugin')
const clean = require('clean-webpack-plugin')

module.exports = {
    mode    : "development",
    entry   : './src/index.js',
    devtool : "cheap-eval-source-map",
    output  : {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins : [
        new clean(),
        new html({
            template : path.resolve(__dirname, 'public') + "/index.html"
        })
    ],
    devServer : {
        contentBase : path.resolve(__dirname, 'dist')
    },
    module  : {
        rules : [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }

};