import React, { Component } from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'

const Countdown = React.createClass({
    getInitialState: function () {
      return {
        count: 0,
        countdownStatus: 'stopped'
      }
    },
    componentDidUpdate: function (prevProps, prevState) {
      if (this.state.countdownStatus !== prevState.countdownStatus) {
        switch (this.state.countdownStatus) {
          case 'started':
            this.startTimer()
            break
        }
      }
    },
    startTimer: function () {
      this.timer = setInterval(() => {
        let newCount = this.state.count - 1
        this.setState({
          count: newCount >= 0 ? newCount : 0
        })
      }, 1000)
    },
    handleSetCountdown: function (seconds) {
      this.setState({
        count: seconds,
        countdownStatus: 'started'
      })
    },
    render: function () {
        let {count} = this.state
        return (
          <div>
            <Clock totalSeconds={count} />
            <CountdownForm onSetCountdown={this.handleSetCountdown}/>
          </div>
        )
    }
})

module.exports = Countdown
