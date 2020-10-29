import React, { Component } from 'react';
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#1e2934",
    color: '#eee',
    boxShadow: theme.shadows[4],
    fontSize: 11,
    border: '1px solid #1e2934',
    maxWidth: 120,
    
  },
  arrow: {
    color: "#1e2934",
    
  }
  ,
}))(Tooltip);


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

    console.log(value)
    return (

      <g {...props}>
         <LightTooltip
    title={value.value}
    placement="right"
    arrow
   
  >
        <path d={arc(this.props.value)} fill={fill} 
     
        />
         </LightTooltip>
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