/**
 * Created by Hasani on 3/16/2017.
 */
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: SRC_DIR+"/app/client.js",
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            }
        ]
    },
    output: {
        path: DIST_DIR+"/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};