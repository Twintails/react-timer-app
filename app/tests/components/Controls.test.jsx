import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import Controls from 'Controls'


describe('Controls', () => {
  it('Should Exist', () => {
    expect(Controls).toExist()
  })

  describe('render', () => {
    it('Should render start when paused and be classified primary', () => {
      let start = ReactTestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>).node.children[0]

      expect(start.innerText).toBe('Start')
      expect(start.classList.contains('primary')).toBe(true)
    })

    it('Should render pause when started and be classified secondary', () => {
      let pause = ReactTestUtils.renderIntoDocument(<Controls countdownStatus="started"/>).node.children[0]

      expect(pause.innerText).toBe('Pause')
      expect(pause.classList.contains('secondary')).toBe(true)
    })

  })

})
