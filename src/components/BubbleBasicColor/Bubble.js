import React, { Component } from 'react'
import { scaleLinear,scaleOrdinal } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from "d3"

export default class Bubble extends Component {
    constructor(props) {
      super(props)
      this.colorScale = scaleOrdinal()
        .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
        .range(d3.schemeSet2);
        // .interpolate(interpolateLab)
  }
    render() {
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale, zScale} = scales
      const { height } = svgDimensions
      const bubble = (
          data.map(datum =>
         
            <circle
            
            cx={xScale(datum.gdpPercap)}  
            cy={yScale(datum.lifeExp)}
            r={zScale(datum.pop)}
            fill={this.colorScale(datum.continent)}
            opacity="0.7"
            stroke="white"
            stroke-width="1px"
          />
         )
        )
      return (
        <g transform={`translate(${margins.left}, ${margins.top})`}>
      {bubble}</g>
      )
    }
  }
