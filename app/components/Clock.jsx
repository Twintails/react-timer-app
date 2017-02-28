import React, { Component } from 'react'

function formatTimeString(unit){
  if (unit < 10){
    return '0'+ unit
  } else {
    return unit
  }
}

const Clock = React.createClass({
    getDefaultProps: function () {
      totalSeconds: 0
    },
    propTypes: {
      totalSeconds: React.PropTypes.number
    },
    formatSeconds: function (totalSeconds) {
      let seconds = formatTimeString(totalSeconds % 60)
      let minutes = formatTimeString(Math.floor(totalSeconds / 60))

      return minutes + ':' + seconds
    },
    render: function () {
      let {totalSeconds} = this.props;
        return (
          <div ref={node => this.node = node} className="clock">
            <span className="clock-text">
              {this.formatSeconds(totalSeconds)}
            </span>
          </div>
        )
    }
})

module.exports = Clock
