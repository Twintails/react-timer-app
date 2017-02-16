import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
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
            <li><NavLink to="/" activeClassName="active">Timer</NavLink></li>
            <li><NavLink to="/" activeClassName="active">Countdown</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><span className="menu-text">Created By <a href="//twintails.com" target="_blank">Twintails</a></span></li>
          </ul>
        </div>
      </div>
    )
  }
})

export default Nav;
