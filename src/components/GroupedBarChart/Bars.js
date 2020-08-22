import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from 'd3'

export default class Bars extends Component {
    constructor(props) {
      super(props)
      this.state = { isHovered: false };
   
      this.colorScale = d3.scaleOrdinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"])
    }
    render() {
      const { scales, margins, data, keys,groupKey, svgDimensions, ...props } = this.props
      const { xScale1, xScale0, yScale } = scales
      const { height } = svgDimensions
      
      const Data=data.map(d=>keys.map(key=>({key: key,value:d[key]})))
      console.log(Data)
      const bars = (
        Data.map(datum =>
          datum.map(d=>
            
            <rect
            // key={datum.state}
            x={xScale1(d.key)} 
            y={yScale(d.value)}
            height={scales.yScale(0)-scales.yScale(d.value)}
            width={xScale1.bandwidth()}
            fill={this.colorScale(d.key)}
          />
          
          )
        ) 
      )
      return (
      
          data.map((d,i)=>
            
          <g transform={`translate(${xScale0(d[groupKey])},0)`}>
             {bars}
          </g>
           
          )
          
       
      )
    }
}