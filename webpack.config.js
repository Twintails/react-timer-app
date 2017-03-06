const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const extractSCSS = new ExtractTextPlugin('css/style.css')
const extractHTML = new ExtractTextPlugin('index.html')

const webpack = require('webpack')

const PORT = process.env.PORT || 3001;

module.exports = {
  context: path.join(__dirname, 'public'),
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    __dirname + '/app/app.jsx',
    __dirname + '/app/index.html'
  ],
  devServer: {
    'content-base': __dirname + 'public',
    progress: true,
    inline: true,
    hot: true,
    port: PORT
  },
  output: {
    path: __dirname + "/public",
    filename: 'js/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Nav:            'app/components/Nav.jsx',
      NavLinks:       'app/components/NavLinks.jsx',
      Main:           'app/components/Main.jsx',
      Timer:          'app/components/Timer.jsx',
      Clock:          'app/components/Clock.jsx',
      Countdown:      'app/components/Countdown.jsx',
      CountdownForm:  'app/components/CountdownForm.jsx',
      Controls:       'app/components/Controls.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] }, exclude: /(node_modules|bower_components)/ },
      { test: /\.scss$/i, loaders: ['style', extractSCSS.extract(['css!postcss!sass'])] },
      { test: __dirname + '/app/index.html', loader:  extractHTML.extract(["html?" + JSON.stringify({ attrs: ["img:src"] })])  },
      // { test: /\.scss?$/, loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'] },
      { test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/i, loaders: [ 'file?name=[name].[ext]' ] },
      // { test: /\.css$/, loaders: [ 'file', 'extract', 'css' ] },
      // { test: __dirname + '/app/index.html', loaders: [ "file?name=[name].[ext]", "extract", "html?" + JSON.stringify({ attrs: ["img:src", "link:href"] }) ] },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    }),
    extractHTML,
    extractSCSS
  ],
  imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      speed: 2
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false }
      ]
    }
  }
}
