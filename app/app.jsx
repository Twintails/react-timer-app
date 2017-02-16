import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router'
import Main from 'Main'


// Load Foundation-sites
import 'style!css!foundation-sites/dist/css/foundation.min.css'
//scss
import './assets/images/favicon.ico'
import './assets/Sass/style.scss'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/> */}
    </Route>
  </Router>,
  document.getElementById('app')
);
