import React, { Component } from 'react'

class Controls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onStatusChange = this.onStatusChange.bind(this)
  }

  onStatusChange (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  }

  componentWillReceiveProps(newProps) {
    // console.log('Controls componentWillReceiveProps', newProps.countdownStatus);
  }

  render() {
    let {countdownStatus} = this.props
    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      } else if (countdownStatus === 'stopped') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    }

    return (
      <div ref={node => this.node = node} id="controls" className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
}

export default Controls
