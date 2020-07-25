import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import {schemeSet1} from 'd3-scale-chromatic'

export default class Bars extends Component {
    constructor(props) {
      super(props)
    
      this.colorScale = scaleLinear()
        .domain([this.props.minValue, this.props.maxValue])
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
     
          <rect
            key={datum.name}
            x={xScale(datum.name)}  
            y={yScale(Math.min(0, datum.value))}
            height={Math.abs(yScale(datum.value) - yScale(0))}
            width={xScale.bandwidth()}
            // fill={this.colorScale(datum.value)}
            fill={schemeSet1[datum.value > 0 ? 1 : 0]}
          />
          
       
        )
      )
      
      
      return (
        <g >
          {bars}
          
        </g>
      )
    }
}