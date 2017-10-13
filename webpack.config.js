const path = require("path");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const PUBLIC_PATH = 'https://localhost:3000/';

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        new SWPrecacheWebpackPlugin({
            cacheId: 'youtube',
            filename: 'service-worker.js',
            minify: true,
            dontCacheBustUrlsMatching: /./,
            staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
            runtimeCaching: [
                {
                  urlPattern: '/',
                  handler: 'networkFirst'
                }
            ]
        })
    ]
};
