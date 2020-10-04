import React, { Component } from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'

class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.colorScale =d3.scaleOrdinal()
        .domain(this.props.columns)
        .range(['#6196ff','#dcbeff','#fabed4','#ffd8b1','#fffac8','#aaffc3','#469990','#ff7b89','#758db7'])
       
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
      return (
        <g transform={"translate(" + width / 2 + "," + ( height/2+100 )+ ")"}>
          {data.map(this.renderSlice)}
        </g>
      );
    }
  }
export default Pie