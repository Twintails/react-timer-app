import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import Timer from 'Timer'


describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist()
  })
  describe('handleSetTimer', () => {
    it('Should set state to "started" to begin timer and count to 1', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer/>)
      timer.handleSetTimer(0)

      expect(timer.state.count).toBe(0)
      expect(timer.state.countStatus).toBe('started')

      setTimeout(() => {
        expect(timer.state.count).toBe(1)
        done()
      }, 1001)
    })

    it('Should countdown to three and stop', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer/>)
      timer.handleSetTimer(0)

      setTimeout(() => {
        expect(timer.state.count).toBe(3)
        done()
      }, 3003)
    })

    it('Should pause countdown on paused status', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer/>)
      timer.handleSetTimer(3)
      timer.handleStatusChange('paused')

      setTimeout(() => {
        expect(timer.state.count).toBe(3)
        expect(timer.state.countStatus).toBe('paused')
        done()
      }, 1001)
    })

    it('Should stop countdown on stopped status', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer/>)
      timer.handleSetTimer(3)
      timer.handleStatusChange('stopped')

      setTimeout(() => {
        expect(timer.state.count).toBe(0)
        expect(timer.state.countStatus).toBe('stopped')
        done()
      }, 1001)
    })

  })
})
