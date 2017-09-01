/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-23 09:23:30
 * @Description: 开发环境
 */
var path = require('path');

//项目根目录
const BASE_ROOT_DIR = path.resolve(__dirname, '../');
const DIR_CONGIG = {
  entry: path.resolve(BASE_ROOT_DIR, './src/scripts/index.js'),
  outputPath: path.resolve(BASE_ROOT_DIR, './build/'),
  devContentBase: path.resolve(BASE_ROOT_DIR, './src/')
}

module.exports = {

  //程序入口
  entry: ['babel-polyfill','whatwg-fetch',DIR_CONGIG.entry],

  output: { //程序出口
    path: DIR_CONGIG.outputPath,
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  devServer: { //webpack-dev-server工具配置
    port: 8090,
    contentBase: DIR_CONGIG.devContentBase,
    inline: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      { //es6 对jsx的解析
        test: /(\.js|\.jsx)$/,
        use: {
          loader: 'babel-loader'
        }
      },
      { //引用css文件
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      { //引用less文件
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      { //引用图片文件
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000
            }
          }
        ]
      },
      { //引用字体文件
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
};
