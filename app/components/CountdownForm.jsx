import React, { Component } from 'react'

class CountdownForm extends React.Component{
    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
      e.preventDefault()
      let strSeconds = this.refs.seconds.value
      if (strSeconds === '') {
        return
      }
      if (strSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds.value = ''
        this.props.onSetCountdown(parseInt(strSeconds, 10))
      }
    }

    componentDidMount() {
      const formInput = this.refs.form[0]
      formInput.validity.valueMissing ? formInput.setCustomValidity("You can't countdown from nothing! That's funny, and silly! -Zoë") : formInput.setCustomValidity('')

      formInput.addEventListener('input', function(event) {
        this.validity.valueMissing ? this.setCustomValidity("You can't countdown from nothing! That's funny, and silly! -Zoë") : this.setCustomValidity('')
      })
    }


    render() {
        return (
          <div ref={node => this.node = node}>
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
              <input type="number" min="1" max="99999" ref="seconds" placeholder="Enter time in 1 to 99999 seconds" required="required"/>
              <button className="button expanded">Start</button>
            </form>
          </div>
        )
    }
}
export default CountdownForm
