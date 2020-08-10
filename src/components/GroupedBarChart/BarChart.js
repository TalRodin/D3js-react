import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'
import Tooltip from './Tooltip';
import * as d3 from 'd3'


class BarChart extends Component {
  constructor() {
    super()
    this.xScale0 = scaleBand()
    this.xScale1 = scaleBand()
    this.yScale = scaleLinear()
    this.state = {
      hoveredBar: null,
    };
  }
  render() {
    const margins = {top: 10, right: 10, bottom: 20, left: 60}
    const svgDimensions = {
      width: 600,
      height: 500
    }

    const keys = [
     "<5",
     "5-13",
     "14-17",
     "18-24",
     "25-44",
     "45-64",
     ">65"
    ]
    const groupKey = 'state'

    console.log(data)
    const maxValue = Math.max(...data.map(d => d.value))
    // const minValue = Math.min(...data.map(d => d.value))
 
    const xScale0 = this.xScale0
      .domain(data.map(d => d[groupKey]))
      .rangeRound([margins.left, svgDimensions.width - margins.right])
      .paddingInner(0.1)
    const xScale1 = this.xScale1
      .domain(keys)
      .rangeRound([0, xScale0.bandwidth()])
      .padding(0.05)
    const yScale = this.yScale
      .domain([0, d3.max(data, d => d3.max(keys, key => d[key]))]).nice()
      .rangeRound([svgDimensions.height - margins.bottom, margins.top])

    
    return (
      
      <div>
      <svg  
      
      width={svgDimensions.width} height={svgDimensions.height}
     >
        
        <Axes
          scales={{ xScale0, xScale1, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        /> 
        <Bars
          scales={{ xScale0,xScale1, yScale }}
          margins={margins}
          keys={keys}
          data={data}
          groupKey={groupKey}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>

      </div>
    )
  }
}
export default BarChart
