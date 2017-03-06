var express = require('express');

// Create our app
const app = express()
const PORT = process.env.PORT || 3001;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT)
});









// var express = require('express');
//
// // webpack
// var webpack = require('webpack')
// var config = require('./webpack.config.js')
// var compiler = webpack(config)
//
// // Create our app
// const app = express()
// const PORT = process.env.PORT || 3001;
//
// app.use(function (req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     res.redirect('http://' + req.hostname + req.url)
//   } else {
//     next()
//   }
// })
//
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }))
// app.use(require('webpack-hot-middleware')(compiler))
//
// app.listen(PORT, function () {
//   console.log('Express server is up on port ' + PORT)
// });
