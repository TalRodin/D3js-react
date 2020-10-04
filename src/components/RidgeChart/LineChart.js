import React, { Component } from 'react';
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import {kernelDensityEstimator} from 'd3';
import Axes from './Axes'
import Line from './Line'
import * as d3 from 'd3'
import data from './data/data'
import { timeDay } from 'd3-time';
import {timeFormat, timeParse} from "d3-time-format"

class LineChart extends Component {
  constructor() {
    super()
      this.xScale = scaleLinear()
      this.yScale = scaleLinear()
      this.yName = scaleBand()
    }
    render() {
        let margins = {top: 60, right: 30, bottom: 20, left:110}
        const svgDimensions = { width: 460 - margins.left - margins.right, height: 400 - margins.top - margins.bottom}
        const max = d3.max(data, d => Math.abs(d.value))
        const min= d3.min(data, d => Math.abs(d.value))
       
        const categories =['Almost Certainly','Highly Likely','Very Good Chance']
        const n=categories.length

        const xScale = this.xScale
              .domain([-10, 140])
              .range([ 0, svgDimensions.width ]);

        const yScale = this.yScale
              .domain([0, 0.4])
              .range([ svgDimensions.height, 0]);

        const yName = this.yName
              .domain(categories)
              .range([0, svgDimensions.height])
              .paddingInner(1)
        // const kde = d3.kernelDensityEstimator(d3.kernelEpanechnikov(7), xScale.ticks(40)) // increase this 40 for more accurate density.
        // const allDensity = []
        // for (let i = 0; i < n; i++) {
        //     let key = categories[i]
        //     let density = kde( data.map(function(d){  return d[key]; }) )
        //     allDensity.push({key: key, density: density})
        // }     

        return (
        <div>
            <svg  width={svgDimensions.width + margins.left + margins.right} height={svgDimensions.height + margins.top + margins.bottom}>
              <Axes
              scales={{ xScale, yScale }}
              margins={margins}
              svgDimensions={svgDimensions}
              />
              <Line scales={{ xScale, yScale, yName }}
                  svgDimensions={svgDimensions}
                  margins={margins}
                  maxValue={max}
                  minValue={min}
                  data={data} 
              />
            </svg> 
          </div>
        );
      }
}
export default LineChart;