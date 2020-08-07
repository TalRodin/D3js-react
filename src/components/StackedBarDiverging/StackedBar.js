import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'
import * as d3 from 'd3'
class BarChart extends Component {
  constructor() {
    super()
    this.xScale = scaleLinear()
    this.yScale = scaleBand()
  }
  render() {
    const margins = {top: 40, right: 30, bottom: 0, left: 80}
    const svgDimensions = {
      width: 500,
      height: 337
    }
    const rows=['<10','10-19','20-29','30-39', '40-49','50-59','60-69','70-79','≥80']
    
    const categories = {
      "pants-fire": "Pants on fire!",
      "false": "False",
      "mostly-false": "Mostly false",
      "barely-true": "Mostly false",
      "half-true": "Half true",
      "mostly-true": "Mostly true",
      "true": "True"
    };
    const negatives = ["Pants on fire!", "False", "Mostly false"]
    const positives = ["Half true", "Mostly true", "True"]
    const maxValue = Math.max(...data.map(d => d.value))
    // const minValue = Math.min(...data.map(d => d.value))
    const  stackGen = d3.stack()
                      .key()
            
    
    const stackedSeries = stackGen(data).map(d => (d.forEach(v => v.key = d.key), d))
  //   const bias = d3.rollups(data, v => d3.sum(v, d => d.value * Math.min(0, signs.get(d.category))), d => d.name)
  // .sort(([, a], [, b]) => d3.ascending(a, b))
    console.log('--------',stackedSeries )

    const xScale = this.xScale
      .domain(d3.extent(stackedSeries.flat(2)))
      .rangeRound([margins.left, svgDimensions.width - margins.right])      
    const yScale = this.yScale
      .padding(2 / 33)
      .domain(data.map(d => d.name))
      .range([margins.top, svgDimensions.height - margins.bottom])

    
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
          data={stackedSeries }
          maxValue={maxValue}
          rows={rows}
          svgDimensions={svgDimensions}
        />
      </svg>
   
      </div>
    )
  }
}
export default BarChart
