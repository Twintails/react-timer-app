import React, { Component } from 'react'
import Nav from 'Nav'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-content">
        <Nav/>
        <div className="row">
          <div className="column medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Main
