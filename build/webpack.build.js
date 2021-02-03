/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(
  {
    entry: {
      home: './src/index.jsx',
    },
    output: {
      filename: 'webpack-zhao.js',
      libraryTarget: 'umd',
      globalObject: 'this',
      // libraryExport: 'default',
      library: 'webpackZhao',
      path: path.resolve(__dirname, '../dist'),
    },
    mode: 'production', //"production",//"development", // 开发模式
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          // 压缩js 必须先es6-> es5转化否则无法执行 @babel/preset-env
          sourceMap: true,
          cache: true, // 缓存
          parallel: true,
          // test: /\.js(\?.*)?$/i,  //测试匹配文件,
          // include: /\/includes/, //包含哪些文件
          // excluce: /\/excludes/, //不包含哪些文件
          // //允许过滤哪些块应该被uglified（默认情况下，所有块都是uglified）。
          // //返回true以uglify块，否则返回false。
          chunkFilter: (chunk) => {
            // `vendor` 模块不压缩
            if (chunk.name === 'vendor') {
              return false;
            }
            return true;
          },
        }),
        new OptimizeCSSAssetsPlugin(), // 压缩css
      ],
    },
    plugins: [],
    module: {
      rules: [],
    },
  },
  common,
);
