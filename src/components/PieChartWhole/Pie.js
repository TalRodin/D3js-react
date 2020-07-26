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
    renderSlice(value, i) {
        let {innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
        return (
          <Slice key={i}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={value}
            label={this.labels[i]}
            fill={this.colorScale[i]} />
          );
    }
    render() {
      let {x, y, data} = this.props;
      let pie = d3.pie();
      let data_values=data.map(function(v){
        return v.value
      })
      return (
        <g transform={`translate(${x}, ${y})`}>
          {pie(data_values).map(this.renderSlice)}
        </g>
      );
    }
  }
export default Pie