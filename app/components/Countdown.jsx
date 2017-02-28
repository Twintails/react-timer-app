import React, { Component } from 'react'
import Clock from 'Clock'

const Countdown = React.createClass({
    render: function () {
        return (
          <div>
            <Clock totalSeconds={129} />
          </div>
        )
    }
})

module.exports = Countdown
