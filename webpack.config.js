var path = require('path')
var autoprefixer = require('autoprefixer')
module.exports = {
  entry : path.resolve(__dirname,'src/js/index.js'),
  output : {
    publicPath : '/dist/js/',
    path : path.resolve(__dirname,'dist/js'),
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      },
      {
        test : /\.css$/,
        loaders : ['css-loader','style-loader']
      },
      {
        test : /\.scss$/,
        loaders : ['sass-loader','postcss']
      },
      {
        test : /\.(eot|ttf|svg|woff|woff2|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loaders : ['file-loader','url-loader']
      }
    ]
  },
  postcss : function(){
    return [autoprefixer]
  }
}
