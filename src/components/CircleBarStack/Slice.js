import React, { Component } from 'react';
import * as d3 from 'd3';
import { svg } from 'd3';

class Slice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      value,
      label,
      fill,
      innerRadius,
      outerRadius,
      cornerRadius,
      startAngle,
      padAngle,
      endAngle,
      data,
      padradius,
      scales,
      ...props
    } = this.props;

    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(padAngle)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .padRadius(innerRadius)
    
    return (
      <g  {...props}>
        
        <path d={arc(data)} fill={"#3e4b86"} />
      </g>
    );
  }
}

export default Slice;