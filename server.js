const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

// Create our app
const app = express()
const compiler = webpack(webpackConfig);

const PORT = process.env.PORT || 3001;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

// app.use(express.static('public'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/public/" // Same as `output.publicPath` in most cases.
}));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT)
});
