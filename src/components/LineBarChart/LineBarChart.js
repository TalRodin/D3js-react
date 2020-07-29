import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'
import * as d3 from 'd3'
import Line from './Line'

class LineBarChart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
    this.yScale2 = scaleLinear()
  }
  render() {
    const margins = {top: 20, right: 30, bottom: 30, left: 40}
    const svgDimensions = {
      width: 800,
      height: 500
    }

    const maxValue = Math.max(...data.map(d => d.sales))
    const minValue = Math.min(...data.map(d => d.sales))
 
    const xScale = this.xScale
      .padding(0.1)
      .domain(data.map(d => d.year))
      .range([margins.left, svgDimensions.width - margins.right])
    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom ,margins.top])
    const yScale2 = this.yScale2
      .domain(d3.extent(data, d => d.efficiency))
      .range([svgDimensions.height - margins.bottom ,margins.top])
    
    return (
      
      <div>
      <svg  
      
      width={svgDimensions.width} height={svgDimensions.height}
     >
        
        <Axes
          scales={{ xScale, yScale,yScale2 }}
          margins={margins}
          svgDimensions={svgDimensions}
         
        />
       
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          maxValue={maxValue}
         
          svgDimensions={svgDimensions}
        />
        <Line scales={{ xScale, yScale2 }}
                svgDimensions={svgDimensions}
                margins={margins}
                maxValue={maxValue}
                minValue={minValue}
                data={data} 
              
            />
      </svg>
   
      </div>
    )
  }
}
export default LineBarChart
