import React, { Component } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'



export default class Axis extends Component {
    componentDidMount() {
      this.renderAxis()
    }
    componentDidUpdate() {
      this.renderAxis()
    }

    renderAxis() {
    //   let f=this.props.data.map(d=>d.value>0? 20 : -20)
    //   var formatAxis = d3.format("  0");
      const axisType = `axis${this.props.orient}`
      // const axisl= d3Axis[axisType]()
      const axisl= d3Axis[`axisLeft`]()
        .scale(this.props.scale)
        // .tickSize(this.props.tickSize)
        .tickPadding([5])
        .tickSize(0)
        
      d3Select(this.axisElement).call(axisl)
    }
    render() {
      return (
        <g
          className={`Axis Axis-${this.props.orient}`}
          ref={(el) => { this.axisElement = el; }}
          transform={this.props.translate}
        >
        </g>
      )
    }
  }