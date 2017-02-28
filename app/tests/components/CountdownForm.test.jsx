import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import CountdownForm from 'CountdownForm'

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist()
  })

  it('Should call on SetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy()
    let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    let el = countdownForm.node
    countdownForm.refs.seconds.value = '109'
    ReactTestUtils.Simulate.submit(el.children[0])

    expect(spy).toHaveBeenCalledWith(109)

  })

  it('Should NOT call on SetCountdown if invalid seconds entered', () => {
    let spy = expect.createSpy()
    let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    let el = countdownForm.node
    countdownForm.refs.seconds.value = 'mumble'
    ReactTestUtils.Simulate.submit(el.children[0])

    expect(spy).toNotHaveBeenCalled()

  })
})
