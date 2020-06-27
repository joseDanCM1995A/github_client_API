const path = require('path');
const htmlWP = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new htmlWP({
            template: './index.html'
        })
    ]
};