// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// built-in plugins
const webpack = require('webpack');

const path = require('path');

module.exports = {
  // entry: './src/index.ts',
  entry: {
    'app': './src/index.ts',
    // 'app': './src/index.tsx',
  },
  output: {
    // filename: 'webpack-plugin-demo.bundle.js',
    // filename: '[name].[hash:8].js',
    filename: '[name].[chunkhash:8].js',
    path: './dist',
    // path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [{
          loader: 'ts-loader',
        }],
        exclude: /node_modules/,
      },
    ],
  },
  // devtool: 'inline-source-map',
  // mode: 'development',
  // mode: 'production',
  // mode: 'none',
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack 4.x & TypeScript 3.x',
      template: './public/index.html',
      // template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
