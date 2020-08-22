import React, { Component } from 'react';
import CirleBar from './Pie';
import data from './data/data'
import { scaleBand, scaleRadial,scaleLinear} from 'd3-scale'
import * as d3 from 'd3'


class Circle extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
  
  }
    render() {
        const margins = {top: 10, right: 10, bottom: 10, left: 10}

        let width = 975
        let height = 975
        let innerRadius = 180
        let outerRadius = Math.min(width, height) / 2
        const columns=['<10','10-19','20-29','30-39', '40-49','50-59','60-69','70-79','≥80']
    const maxValue = Math.max(...data.map(d => d.value))
    // const minValue = Math.min(...data.map(d => d.value))
    const  stackGen = d3.stack()
            .keys(columns)
            
    
    const stackedSeries = stackGen(data).map(d => (d.forEach(v => v.key = d.key), d))
        const xScale = this.xScale
            .align(0) 
            .domain( data.map(d => d.name))
            .range([0, 2 * Math.PI])

        const yScale = this.yScale
            .range([innerRadius * innerRadius, outerRadius * outerRadius])
            .domain([0, d3.max(data, d => d.total)])

        return (
          <div>
            <svg  width={width} height={height} >
              <CirleBar
                width={width}
                height={height}
                scales={{ xScale, yScale }}
                innerRadius={innerRadius}
                // outerRadius={data.map(d => d.value)}
                cornerRadius={3}
                padAngle={0.01}
                // startAngle={data.map(d => d.name)}
                padRadius={innerRadius}
                // endAngle={data.map(d=>xScale(d.name) + xScale.bandwidth())}
                data={stackedSeries} />
            </svg>
          </div> 
        );
      }
}
export default Circle;