import React, { Component } from 'react';
import Pie from './Pie';
import data from './data/data'

import *  as d3 from 'd3';
class ChartLine extends Component {
  constructor() {
    super()

    this.state = {
      hoveredBar: null,
    
    };
  }
    render() {
        let width = 700;
        let height = Math.min(width, 500);
        let radius = Math.min(width, height)/2 ;
        let x = width/2;
        let y = height/2;

        return (
          <div>
            <svg width='700' height='700' viewBox="0 -100 500 900" >
              <Pie x={x} y={y} 
                radius={radius} 
                innerRadius={radius * 0.67}
                outerRadius={Math.min(width, height) / 2 - 1}
                cornerRadius={3}
                padAngle={.005}
                data={data} 
               
                />
       
            </svg>
         
          </div> 
        );
      }
}
export default ChartLine;