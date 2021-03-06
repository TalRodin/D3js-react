import React, { Component } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'

export default class AxisBubble extends Component {
    componentDidMount() {
      this.renderAxis()
    }
  
    componentDidUpdate() {
      this.renderAxis()
    }
  
    renderAxis() {
      const axisType = `axis${this.props.orient}`
      const axis = d3Axis.axisLeft()
        .scale(this.props.scale)
        .tickSize(-this.props.tickSize)
        .ticks([1])
      d3Select(this.axisElement).call(axis)
    }
  
    render() {
      return (
        <g
          className={`Axis Axis-${this.props.orient}`}
          ref={(el) => { this.axisElement = el; }}
          transform={this.props.translate}
        />
      )
    }
  }