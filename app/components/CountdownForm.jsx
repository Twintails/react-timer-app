import React, { Component } from 'react'

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

    componentDidMount() {
      console.log('Form Did Mount');
      console.log(this.refs.form[0].setCustomValidity("You can't coundown from nothing! That's funny and silly! -Zoë"));
    }

    render() {
        return (
          <div ref={node => this.node = node}>
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
              <input type="text" ref="seconds" placeholder="Enter time in seconds" required="required"/>
              <button className="button expanded">Start</button>
            </form>
          </div>
        )
    }
}
export default CountdownForm
