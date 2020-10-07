import React, { Component } from 'react';
import * as d3 from 'd3';
class Slice extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
  
    let {
      value,
      label,
      fill,
      innerRadius = 0,
      outerRadius,
      cornerRadius,
      padAngle,
      ...props
    } = this.props;
    // if (this.state.isHovered) {
    //   outerRadius *= 1.05;
    // }
    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);
    return (
      // 
      <g {...props}>
        <path d={arc(this.props.value)} fill={fill} 
       
        />
        <text
          transform={`translate(${arc.centroid(this.props.value)})`}
          dy=".35em"
          textAnchor="middle"
          fill="black"
          font-size="10px"
        >
          {this.props.label}
        </text>
       
      </g>
    );
  }
}

export default Slice;