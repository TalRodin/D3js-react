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
    const margins = { top: 30, right: 60, bottom: 10, left: 60}
    const svgDimensions = {
      width: 900,
      height: 500
    }

    const maxValue = Math.max(...data.map(d => d.value))
    const minValue = Math.min(...data.map(d => d.value))
 
    const xScale = this.xScale
      .padding(0.1)
      .domain(data.map(d => d.name))
      .range([margins.left, svgDimensions.width - margins.right])
    const yScale = this.yScale
      .domain([minValue, maxValue])
      .range([margins.top,svgDimensions.height - margins.bottom])

    
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
          minValue={minValue}
          svgDimensions={svgDimensions}
        />
      </svg>
      </div>
    )
  }
}
export default BarChart
