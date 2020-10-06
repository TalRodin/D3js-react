import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';

export default class Heatmap extends Component {
    constructor(props) {
        super(props)
        // this.state = { isHovered: false };
        // this.onMouseOver = this.onMouseOver.bind(this);
        // this.onMouseOut = this.onMouseOut.bind(this);
        this.colorScale = scaleLinear()
        .range(["white", "#69b3a2"])
        .domain([1,100])
      }
    //   onMouseOver() {
    //     this.setState({ isHovered: true });
    //   }
    //   onMouseOut() {
    //     this.setState({ isHovered: false });
    //   }
      render() {
        console.log('>>>>>>',this.props)
        const { scales, margins, data, svgDimensions, ...props } = this.props
        const { xScale, yScale } = scales
        const { height } = svgDimensions
        
        const bars = (
          data.map((datum,i) =>
       
            <rect
              key={i}
              x={xScale(datum.group)}  
              y={yScale(datum.variable)}
              height={yScale.bandwidth()}
              width={xScale.bandwidth()}
              fill={this.colorScale(datum.value)}
            //   onMouseOver={() => this.props.onMouseOverCallback(datum)}
            //   onMouseOut={() => this.props.onMouseOutCallback(null)}
            />
            
         
          )
        )
        
        
        return (
          <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}  {...props}>
            {bars}
            
          </g>
        )
      }
  }