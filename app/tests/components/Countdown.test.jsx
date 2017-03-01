import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import Countdown from 'Countdown'


describe('Countdown', () => {
  it('Should exist', () => {
    expect(Countdown).toExist()
  })
  describe('handleSetCountdown', () => {
    it('Should set state to "started" and begin countdown', (done) => {
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(10)

      expect(countdown.state.count).toBe(10)
      expect(countdown.state.countdownStatus).toBe('started')

      setTimeout(() => {
        expect(countdown.state.count).toBe(9)
        done()
      }, 1001)
    })
    it('Should countdown to zero and stop', (done) => {
      let countdown = ReactTestUtils.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(1)

      setTimeout(() => {
        expect(countdown.state.count).toBe(0)
        done()
      }, 3003)
    })
  })
})
