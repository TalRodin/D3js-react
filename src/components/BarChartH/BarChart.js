import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'

class BarChart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
  }
  render() {
    const margins = { top: 30, right: 0, bottom: 30, left: 40 }
    const svgDimensions = {
      width: 800,
      height: 500
    }

    const maxValue = Math.max(...data.map(d => d.value))
    // const minValue = Math.min(...data.map(d => d.value))
 
    const xScale = this.xScale
      .padding(0.1)
      .domain(data.map(d => d.name))
      .range([margins.left, svgDimensions.width - margins.right])
    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom ,margins.top])

    
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
