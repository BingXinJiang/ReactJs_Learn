var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
  //插件项
  plugins: [commonsPlugin],
  //页面入口文件配置
  entry: {
    index : './src/index.js'
  },
  //入口文件输出配置
  output: {
    path: './lib/',
    filename: '[name].js'
  },
  module: {
    //加载器配置
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  },
  //其它解决方案配置
  resolve: {
    // root: 'D:/workproject/webpack/src', //绝对路径
    extensions: ['', '.js', '.json', '.scss'],
    alias: {
      AppStore : 'js/stores/AppStores.js',
      ActionType : 'js/actions/ActionType.js',
      AppAction : 'js/actions/AppAction.js'
    }
  }
};