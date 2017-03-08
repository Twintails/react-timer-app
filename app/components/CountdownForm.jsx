import React, { Component } from 'react'

class CountdownForm extends React.Component{
    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
      e.preventDefault()
      let strSeconds = this.refs.seconds.value
      console.log("Form Called", this.refs);
      console.log("input valid? ", this.refs.form[0].checkValidity());
      if (this.refs.form[0].checkValidity() && this.refs.form[0].value === "" ) {
        this.refs.form[0].setAttribute("required", "required")
        this.refs.form[0].setCustomValidity("You can't coundown from nothing! That's funny and silly! -Zoë")
      } else {
        this.refs.form[0].removeAttribute("required")
        this.refs.form[0].setValidationMessage = ""
      }
      if (strSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds.value = ''
        this.props.onSetCountdown(parseInt(strSeconds, 10))
      }
    }

    componentDidMount() {
      // console.log("Mounted Form ",this.refs);
      // this.node.children[0].children[0].setCustomValidity("You can't coundown from nothing! That's funny and silly! -Zoë")

      // this.refs.form[0].setValidationMessage = "You can't coundown from nothing! That's funny and silly! -Zoë"
    }

    componentDidUpdate() {
      // console.log('Form Updates');
    }

    render() {
        return (
          <div ref={node => this.node = node}>
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
              <input type="number" min="1" max="99999" ref="seconds" placeholder="Enter time in seconds" required="required"/>
              <button className="button expanded">Start</button>
            </form>
          </div>
        )
    }
}
export default CountdownForm
