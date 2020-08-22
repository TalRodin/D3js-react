import React, { Component } from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'

class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.colorScale = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]
      this.renderSlice = this.renderSlice.bind(this);
      this.labels = this.props.data.map(function(v){
        return v.name
      })
    }
    renderSlice(v) {
        console.log('******', v)
        let {innerRadius, cornerRadius, padAngle,scales,endAngle,outerRadius} = this.props;
        return (
          <Slice
            innerRadius={scales.yScale(v[0])}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={v.value}
            // label={this.labels[i]}
            // fill={this.colorScale[i]} 
            scales={scales}
            endAngle={scales.xScale(v.name) + scales.xScale.bandwidth()}
            padradius={innerRadius}
            outerRadius={scales.yScale(v[1])}
            startAngle={scales.xScale(v.name)}
            />
          );
    }
    render() {
      let {x, y, data, width, height} = this.props;
  
      // let data_values=data.map(function(v){
      //   console.log(v)
      //   return v
      // })
      return (
        <g transform={"translate(" + width / 2 + "," + ( height/2+100 )+ ")"}>
          {data.map(this.renderSlice)}
        </g>
      );
    }
  }
export default Pie