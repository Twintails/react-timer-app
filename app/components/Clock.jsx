import React, {Component} from 'react'

class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        totalSeconds : 0
      }
    }

    formatTimeString(unit) {
        if (unit < 10) {
            return '0' + unit
        } else {
            return unit
        }
    }

    formatSeconds(totalSeconds) {
        let seconds = this.formatTimeString(totalSeconds % 60)
        let minutes = this.formatTimeString((Math.floor(totalSeconds / 60) % 60))
        let hours   = this.formatTimeString(Math.floor((totalSeconds / 60) / 60))
        if (hours !== '00') {
          return hours + ':' + minutes + ':' + seconds
        } else {
          return minutes + ':' + seconds
        }
    }

    render() {
        let {totalSeconds} = this.props;
        return (
            <div ref={node => this.node = node} className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        )
    }
}

Clock.propTypes = {
    totalSeconds: React.PropTypes.number
}

export default Clock
