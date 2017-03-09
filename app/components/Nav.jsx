import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from 'NavLinks'

class Nav extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><span>Timer App</span></li>
            <li><IndexLink to="/" >Timer</IndexLink></li>
            <li><NavLink to="/countdown" >Countdown</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text"><span>Created By <a href="//twintails.com" target="_blank">Twintails</a></span></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Nav
