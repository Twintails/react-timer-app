import React, { Component } from 'react'
import Nav from 'Nav'

const Main = (props) => {
  return (
    <div className="main-content">
      <Nav/>
      <div className="row">
        <div className="medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main;
