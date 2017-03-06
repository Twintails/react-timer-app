import React, { Component } from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

class Countdown extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        count: 0,
        countdownStatus: 'stopped',
      }
      this.handleSetCountdown = this.handleSetCountdown.bind(this)
      this.handleStatusChange = this.handleStatusChange.bind(this)
      // this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }

    componentWillUpdate(nextProps, nextState) {
      // console.log('component Will Update');
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.countdownStatus !== prevState.countdownStatus) {
        switch (this.state.countdownStatus) {
          case 'started':
            this.startTimer()
            break
          case 'stopped':
            this.setState({count: 0})
          case 'paused':
            clearInterval(this.timer)
            this.timer = undefined
            break
        }
      }
    }

    componentWillMount() {
      // console.log('component Will Moun');
    }

    componentDidMount() {
      // console.log('component Did Mount');
    }

    componentWillUnmount() {
      // console.log('Timer Unmounted');
      clearInterval(this.timer)
      this.timer = undefined
    }

    startTimer() {
      this.timer = setInterval(() => {
        let newCount = this.state.count - 1
        let currentStatus = this.state.countdownStatus
        this.setState({
          count: newCount >= 0 ? newCount : 0,
          countdownStatus: newCount >= 1 ? currentStatus : 'stopped'
        })
      }, 1000)
    }

    handleSetCountdown(seconds) {
      this.setState({
        count: seconds,
        countdownStatus: 'started'
      })
    }

    handleStatusChange(newStatus) {
      this.setState({countdownStatus: newStatus})
    }

    render() {
        let {count, countdownStatus} = this.state
        let renderControlArea = () => {
          if (countdownStatus !== 'stopped') {
            return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
          } else {
            return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
          }
        }
        return (
          <div>
            <h1 className="page-title">Countdown App</h1> 
            <Clock totalSeconds={count} />
            {renderControlArea()}
          </div>
        )
    }
}
export default Countdown
