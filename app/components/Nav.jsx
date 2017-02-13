import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import NavLink from 'NavLinks'

const Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault()
    var location = this.refs.search.value
    var encodedLocation = encodeURIComponent(location)

    if ( location.length > 0) {
      this.refs.search.value = ''
      // window.location.hash = '/?location=' + encodedLocation
      window.location.href = window.location.origin + '/?location=' + encodedLocation
    }
  },
  render: function (props) {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li><span className="menu-text">App BP</span></li>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
        </div>
      </div>
    )
  }
})

export default Nav;
