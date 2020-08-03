import React, { Component } from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'

class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.colorScale = ['#4fc3f7','#cfd8dc','#80cbc4','#7986cb'];
      this.renderSlice = this.renderSlice.bind(this);
      this.labels = this.props.data.map(function(v){
        return v.name
      })
    }
    renderSlice(v,i) {
        console.log(v)
        let {innerRadius, cornerRadius, padAngle,scales} = this.props;
        return (
          <Slice
            innerRadius={innerRadius}
            
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={v.value}
            // label={this.labels[i]}
            // fill={this.colorScale[i]} 
           
            endAngle={scales.xScale(v.name) + scales.xScale.bandwidth()}
            padradius={innerRadius}
            outerRadius={v.value}
            startAngle={v.name}
            />
          );
    }
    render() {
      let {x, y, data, width, height} = this.props;
  
      let data_values=data.map(function(v){
        console.log(v)
        return v
      })
      return (
        <g transform={"translate(" + width / 2 + "," + ( height/2+100 )+ ")"}>
          {data_values.map(this.renderSlice)}
        </g>
      );
    }
  }
export default Pie