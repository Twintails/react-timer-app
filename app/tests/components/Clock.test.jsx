import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import Clock from 'Clock'

describe( 'Clock', () => {
  it('Clock should exist', () => {
    expect(Clock).toExist()
  })

  describe('render', () => {
    it( 'Should render clock output', () => {
      let actualText = ReactTestUtils
        .renderIntoDocument(<Clock totalSeconds={62}/>)
        .node.children[0].innerText

      expect(actualText).toBe('01:02')
    })
  })

  describe ('formatSeconds', () => {
    it('Should format Seconds', () => {
      let clock = ReactTestUtils.renderIntoDocument(<Clock/>)
      let seconds = 615
      let expected = '10:15'
      let actual = clock.formatSeconds(seconds)
      expect(actual).toBe(expected)
    })
    it('Should format Seconds when less than 10', () => {
      let clock = ReactTestUtils.renderIntoDocument(<Clock/>)
      let seconds = 61
      let expected = '01:01'
      let actual = clock.formatSeconds(seconds)
      expect(actual).toBe(expected)
    })
    it('Should format Hours when greater than 3600', () => {
      let clock = ReactTestUtils.renderIntoDocument(<Clock/>)
      let seconds = 3601
      let expected = '01:00:01'
      let actual = clock.formatSeconds(seconds)
      expect(actual).toBe(expected)
    })
    it('Should format Hours when seconds is 99999', () => {
      let clock = ReactTestUtils.renderIntoDocument(<Clock/>)
      let seconds = 99999
      let expected = '27:46:39'
      let actual = clock.formatSeconds(seconds)
      expect(actual).toBe(expected)
    })
  })
})
