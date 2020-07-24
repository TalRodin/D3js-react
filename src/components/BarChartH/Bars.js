import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'


export default class Bars extends Component {
    constructor(props) {
      super(props)
    
      this.colorScale = scaleLinear()
        .domain([0, this.props.maxValue])
        .range(['#b3e5fc', '#01579b'])
        .interpolate(interpolateLab)
    }
   
    render() {
      console.log('>>>>>>',this)
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale } = scales
      const { height } = svgDimensions
     
      const bars = (
        data.map(datum =>
          <>
          <rect
            key={datum.name}
            x={xScale(datum.name)}  
            y={yScale(datum.value)}
            height={scales.yScale(0) - scales.yScale(datum.value)}
            width={xScale.bandwidth()}
            fill={this.colorScale(datum.value)}
          />
          
          </>
        )
      )
      
      
      return (
        <g >
          {bars}
          
        </g>
      )
    }
  }