/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-23 11:35:40
 * @Description: 生产环境
 */

var path = require('path');
var webpack = require('webpack');

/**
 * [BASE_ROOT_DIR 项目根目录]
 * [DIR_CONGIG 需要的路径信息]
 */
const BASE_ROOT_DIR = path.resolve(__dirname, '../');
const DIR_CONGIG = {
  entry: path.resolve(BASE_ROOT_DIR, './src/scripts/index.js'),
  outputPath: path.resolve(BASE_ROOT_DIR, './build/'),
  tmplSrc: path.resolve(BASE_ROOT_DIR, './src/tmpl.html')
}

/**
 * plugin:
 * html-webpack-plugin 生成index页面
 * extract-text-webpack-plugin 抽离样式文件
 * clean-webpack-plugin 删除文件
 * optimize-css-assets-webpack-plugin 压缩css
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


/*=========================================================
=                    Application entry                    =
=========================================================*/
var webpackConfig = {};
webpackConfig.entry = { //程序入口
  app: DIR_CONGIG.entry,
  vendors: ['react', 'react-dom']
};

/*=========================================================
=                    Application output                   =
=========================================================*/
webpackConfig.output = { //程序出口
  path: DIR_CONGIG.outputPath,
  filename: 'bundle.js'
};

/*=========================================================
=                    Application module                   =
=========================================================*/
webpackConfig.module = {
  rules: [
    { //es6 对jsx的解析
      test: /(\.js|\.jsx)$/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    },
    { //引用css文件
      test: /\.css$/,
      use: ExtractTextPlugin.extract([{
        loader: 'css-loader'
      }])
    },
    { //引用less文件
      test: /\.less$/,
      use: ExtractTextPlugin.extract([{
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }])
    },
    { //引用图片文件
      test: /\.(jpg|png|jpeg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 25000,
            name: 'img/[name].[ext]'
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
};

/*=========================================================
=                    Application plugins                  =
=========================================================*/
webpackConfig.plugins = [

  //清空构建文件夹
  new CleanWebpackPlugin('build', {
    root: BASE_ROOT_DIR
  }),

  //分离第三方插件
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors/vendors.js' }),

  //压缩js代码
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),

  //去掉react中的警告，react会自己判断
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),

  //抽取样式文件
  new ExtractTextPlugin('app.css'),

  //生成index页面
  new HtmlWebpackPlugin({
    template: DIR_CONGIG.tmplSrc
  }),

  //压缩css文件
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true
  })
];

module.exports = webpackConfig;
