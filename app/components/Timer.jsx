import React, { Component } from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

class Timer extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        count: 0,
        countStatus: 'stopped',
      }
      this.handleSetTimer = this.handleSetTimer.bind(this)
      this.handleStatusChange = this.handleStatusChange.bind(this)
      // this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }

    componentWillUpdate(nextProps, nextState) {
      // console.log('component Will Update');
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.countStatus !== prevState.countStatus) {
        switch (this.state.countStatus) {
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
        let newCount = this.state.count + 1
        let currentStatus = this.state.countStatus
        this.setState({
          count: newCount >= 0 ? newCount : 0,
          countStatus: newCount >= 1 ? currentStatus : 'stopped'
        })
      }, 1000)
    }

    handleSetTimer(seconds) {
      this.setState({
        count: seconds,
        countStatus: 'started'
      })
    }

    handleStatusChange(newStatus) {
      this.setState({countStatus: newStatus})
    }

    render() {
        let {count, countStatus} = this.state
        let renderControlArea = () => {
          console.log(countStatus);
          if (countStatus === 'stopped') {

          } else {
            // return <CountdownForm onSetTimer={this.handleSetTimer}/>
          }
        }
        return (
          <div>
            <h1 className="page-title">Timer</h1>
            <Clock totalSeconds={count} />
            <Controls countdownStatus={countStatus} onStatusChange={this.handleStatusChange}/>
          </div>
        )
    }
}
export default Timer
