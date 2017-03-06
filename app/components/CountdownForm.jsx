import React, { Component } from 'react'
import Controls from 'Controls'

class CountdownForm extends React.Component{
    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
      e.preventDefault()
      var strSeconds = this.refs.seconds.value
      if (strSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds.value = ''
        this.props.onSetCountdown(parseInt(strSeconds, 10))
      }
    }

    render() {
        return (
          <div ref={node => this.node = node}>
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
              <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
              <Controls countdownStatus="paused"/>
              <button className="button expanded">Start</button>
            </form>
          </div>
        )
    }
}
export default CountdownForm
