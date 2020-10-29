import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
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

export default class Heatmap extends Component {
    constructor(props) {
        super(props)

        this.colorScale = scaleLinear()
        .range(["white", "#69b3a2"])
        .domain([1,100])
      }

      render() {
        console.log('>>>>>>',this.props)
        const { scales, margins, data, svgDimensions, ...props } = this.props
        const { xScale, yScale } = scales
        const { height } = svgDimensions
        
        const bars = (
          data.map((datum,i) =>
          <LightTooltip
          title={datum.value}
          placement={"right"}
          arrow
         
        >
            <rect
              key={i}
              x={xScale(datum.group)}  
              y={yScale(datum.variable)}
              height={yScale.bandwidth()}
              width={xScale.bandwidth()}
              fill={this.colorScale(datum.value)}
           
            />
          </LightTooltip>  
         
          )
        )
        
        
        return (
          <g {...props}>
            {bars}
            
          </g>
        )
      }
  }