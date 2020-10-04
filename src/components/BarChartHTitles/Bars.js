import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'


export default class Bars extends Component {
    constructor(props) {
      super(props)
      this.state = { isHovered: false };
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
      this.colorScale = scaleLinear()
        .domain([0, this.props.maxValue])
        .range(['#7b94ba', '#7b94ba'])
        .interpolate(interpolateLab)
    }
    onMouseOver() {
      this.setState({ isHovered: true });
    }
    onMouseOut() {
      this.setState({ isHovered: false });
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
            y={yScale(datum.value)}
            height={scales.yScale(0) - scales.yScale(datum.value)}
            width={xScale.bandwidth()}
            fill={this.colorScale(datum.value)}
            onMouseOver={() => this.props.onMouseOverCallback(datum)}
            onMouseOut={() => this.props.onMouseOutCallback(null)}
          />
          
       
        )
      )
      const titles = (
        data.map(datum =>
         <text 
         font-family="sans-serif" 
         fill="#414141"
         font-size="7"
         text-anchor="end"
         dy="-1em"
         dx="1.6em"
         x={xScale(datum.name) + xScale.bandwidth() / 2}
         y={yScale(datum.value)}
         >
           {(datum.value*100).toFixed(2)+'%'}
         </text> 
        
        )
        )
      
      return (
        <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}  {...props}>
          {bars}
          {titles}
        </g>
      )
    }
}