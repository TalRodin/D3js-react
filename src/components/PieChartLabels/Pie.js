import React, { Component } from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'

class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.colorScale = ['#5371f9','#4fc3f7','#cfd8dc','#66a3ff','#8cff66','#ff80d5','#80cbc4','#ffffcc','#ff8080','#7986cb','#e4794f','#407294','#cef9c2','#f9d2c2','#c36fa2','#951f5b','#d2c2f9','#ace5f3'];
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
            fill={this.colorScale[i]} 

            />
          );
    }
    render() {
      let {x, y, data} = this.props;
      let pie = d3.pie();
      let data_values=data.map(function(v){
        return v.value
      })
      
      console.log(pie(data_values))
      
      return (
        <g transform={`translate(${x}, ${y})`}>
          {pie(data_values).map(this.renderSlice)}
        </g>
      );
    }
  }
export default Pie