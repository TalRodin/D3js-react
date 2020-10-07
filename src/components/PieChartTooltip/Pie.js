import React, { Component } from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'


class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isHovered: false };
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
      this.colorScale = ['#5371f9','#4fc3f7','#cfd8dc','#66a3ff','#8cff66','#ff80d5','#80cbc4','#ffffcc','#ff8080','#7986cb','#e4794f','#407294','#cef9c2','#f9d2c2','#c36fa2','#951f5b','#d2c2f9','#ace5f3'];
      this.renderSlice = this.renderSlice.bind(this);
      this.labels = this.props.data.map(function(v){
        return v.name
      })
   
    }
    onMouseOver() {
      this.setState({ isHovered: true });
    }
    onMouseOut() {
      this.setState({ isHovered: false });
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
            onMouseOver={() => this.props.onMouseOverCallback({value,l:this.labels[i]})}
            onMouseOut={() => this.props.onMouseOutCallback(null)}
            />
          );
    }

    render() {
      let {x, y, data} = this.props;
      let pie = d3.pie();
      console.log(this.labels)
      let data_values=data.map(function(v){
        return v.value
      })
      console.log(data_values)
      return (
        <>
        <g transform={`translate(${x}, ${y})`} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
          {pie(data_values).map(this.renderSlice)}
         
        </g>
       
      </>
      );
    }
  }
export default Pie