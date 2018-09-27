const path = require('path');
const webpack = require('webpack');
const BrowserSync = require('browser-sync-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/app.js',
    vendor: [
      'angular'
    ]
  },
  watch: true,
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new ExtractTextPlugin('css/styles.css'),
    new BrowserSync({
      server: {
        baseDir: './dist',
        routes: {
          '/node_modules': 'node_modules'
        }
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        exclude: /index.html/,
        use: [
          {
            loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src/app/components/'))
          },
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: false
  }
};