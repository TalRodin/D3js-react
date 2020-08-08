import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import {schemeSet1} from 'd3-scale-chromatic'
import * as d3 from 'd3';

export default class Bars extends Component {
    constructor(props) {
      super(props)
      this.colorScale = scaleLinear()
        .domain([this.props.minValue, this.props.maxValue])
        .range(['#b3e5fc', '#01579b'])
        .interpolate(interpolateLab)
    }
    render() {
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale } = scales
      const { height } = svgDimensions
  
      const bars = (
        data.map(datum =>
          <g>
          <rect
            key={datum.name}
            x={xScale(Math.min(0, datum.value))}  
            y={yScale(datum.name)}
            height={yScale.bandwidth()}
            width={Math.abs(xScale(datum.value) - xScale(0))}
            fill={schemeSet1[datum.value > 0 ? 1 : 0]}
          >
          </rect>
            <text 
            fontFamily="sans-serif" 
            fill="black"
            fontSize="10"
            textAnchor={datum.value < 0 ? "end" : "start"}
            dy="0.35em"
            x={xScale(datum.value) + Math.sign(datum.value - 0) * 4}
            y={yScale(datum.name) + yScale.bandwidth()/2}>
             {d3.format("+,.0%")(datum.value)}
            </text>
          </g>
        )
      )
      return (
        <>
          {bars} 
        </>
      )
    }
}