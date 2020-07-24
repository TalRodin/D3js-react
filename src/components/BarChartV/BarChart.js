import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'

class BarChart extends Component {
  constructor() {
    super()
    this.xScale = scaleLinear()
    this.yScale = scaleBand()
  }
  render() {
    const margins = { top: 30, right: 0, bottom: 10, left: 30 }
    const svgDimensions = {
      width: 500,
      height: 800
    }

    const maxValue = Math.max(...data.map(d => d.value))
    // const minValue = Math.min(...data.map(d => d.value))
 
    const xScale = this.xScale
      .domain([0, maxValue])
      .range([margins.left, svgDimensions.width - margins.right])
      
    const yScale = this.yScale
      .domain(data.map(d => d.name))
      .range([margins.top, svgDimensions.height - margins.bottom])
      .padding(0.1)
      

    
    return (
      
      <div>
      <svg  
      
      width={svgDimensions.width} height={svgDimensions.height}
     >
        
        <Axes
          scales={{ xScale, yScale }}
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
      </svg>
   
      </div>
    )
  }
}
export default BarChart
