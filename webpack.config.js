const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const extractHTML = new ExtractTextPlugin({
//   filename: 'index.html',
//   allChunks: true
// })
// const extractSass = new ExtractTextPlugin({
//     filename: "css/style.css",
//
//     // disable: process.env.NODE_ENV === "development"
//     allChunks: true
// })

const webpack = require('webpack')

const PORT = process.env.PORT || 3001;

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    '/app/app.jsx',
    '/app/index.html',
    '/app/assets/Sass/style.scss'
  ],
  devServer: {
    // publicPath : __dirname + 'public',
    inline: true,
    hot: true,
    port: PORT
  },
  output: {
    path: __dirname + "/public",
    filename: 'js/bundle.js'
  },
  resolve: {
    modules: [ __dirname, "node_modules" ],
    alias: {
      appStyles:      'app/assets/Sass/style.scss',
      Nav:            'app/components/Nav.jsx',
      NavLinks:       'app/components/NavLinks.jsx',
      Main:           'app/components/Main.jsx',
      Timer:          'app/components/Timer.jsx',
      Clock:          'app/components/Clock.jsx',
      Countdown:      'app/components/Countdown.jsx',
      CountdownForm:  'app/components/CountdownForm.jsx',
      Controls:       'app/components/Controls.jsx'
    },
    extensions: ['.js','.jsx']
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.jsx?$/,
        use: ['babel-loader'],
        query: { presets: ['react', 'es2015'] },
        exclude: /(node_modules|bower_components)/
      },
      // { test: __dirname + '/app/index.html', loader:  extractHTML.extract(["html?" + JSON.stringify({ attrs: ["img:src"] })])  },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/i,
        use: [ 'file-loader?name=[name].[ext]' ]
      },
      // {
      //   test: /\.html$/,
      //   use: extractHTML.extract({
      //     use: ['html-loader']
      //   }),
      // },
      // {
      //   test: /\.scss$/,
      //   use: extractSass.extract({
      //     fallback: 'style-loader',
      //     //resolve-url-loader may be chained before sass-loader if necessary
      //     use: ['css-loader', 'sass-loader']
      //   })
      // },
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    }),
    // extractHTML,
    // extractSass
  ],
  // imagemin: {
  //   gifsicle: { interlaced: false },
  //   jpegtran: {
  //     progressive: true,
  //     arithmetic: false
  //   },
  //   optipng: { optimizationLevel: 5 },
  //   pngquant: {
  //     floyd: 0.5,
  //     speed: 2
  //   },
  //   svgo: {
  //     plugins: [
  //       { removeTitle: true },
  //       { convertPathData: false }
  //     ]
  //   }
  // }
}
