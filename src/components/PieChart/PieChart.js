import React, { Component } from 'react';
import Pie from './Pie';
import data from './data/data'

class ChartLine extends Component {
    render() {
        let width = 500;
        let height = Math.min(width, 500);
        let radius = Math.min(width, height)/2 ;
        let x = width/2;
        let y = height/2;
        return (
          <div>
            <svg width='500' height='500' viewBox="0 -100 500 900" >
              <Pie x={x} y={y} 
                radius={radius} 
                innerRadius={radius * 0.67}
                outerRadius={radius - 1}
                cornerRadius={3}
                padAngle={.005}
                data={data} />
            </svg>
          </div> 
        );
      }
}
export default ChartLine;