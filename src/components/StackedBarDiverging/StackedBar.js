import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { group,rollup} from 'd3-array'
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
    const rows = [
      "Mostly false",
      "False",
      "Pants on fire!",
      "Half true",
      "Mostly true",
      "True",
    ]
    
    const categories = {
      "pants-fire": "Pants on fire!",
      "false": "False",
      "mostly-false": "Mostly false",
      "barely-true": "Mostly false", // recategorized
      "half-true": "Half true",
      "mostly-true": "Mostly true",
      "true": "True"
    };
    const d=rollup(data, group => {
      const sum = d3.sum(group, d => d.value);
      console.log(sum)
      for (const d of group) d.value /= sum;
    }, d => d.name);
    
    console.log(d)


    const maxValue = Math.max(...data.map(d => d.value))
    // const minValue = Math.min(...data.map(d => d.value))
    const  stackGen = d3.stack()
            .keys(rows)
    const stackedSeries = stackGen(data).map(d => (d.forEach(v => v.key = d.key), d))
    
    console.log(stackedSeries)
    
    const xScale = this.xScale
      .domain([0, d3.max(stackedSeries , d => d3.max(d, d => d[1]))])
      .range([margins.left, svgDimensions.width - margins.right])      
    const yScale = this.yScale
      .padding(0.1)
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

