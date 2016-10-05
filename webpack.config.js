module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/js/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {

    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] }, exclude: /(node_modules|bower_components)/ },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'url?limit=10000', 'img?minimize' ] }
    ]
  },
  sassLoader: {
    includePaths: [__dirname + "./app/assets/Sass"]
  },
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
