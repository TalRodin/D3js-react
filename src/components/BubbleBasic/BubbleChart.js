import React, { Component } from 'react';
import { scaleBand, scaleLinear, scaleSequential} from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import * as d3 from 'd3';
import Bubble from './Bubble'

export default class ChartBubble extends React.Component{
    constructor() {
        super()
        this.xScale = scaleLinear()
        this.yScale = scaleLinear()
        this.zScale = scaleLinear()
    }
        render(){
            const margins = ({top: 10, right: 20, bottom: 30, left: 70})
            const svgDimensions = {
              width: 800,
              height: 500
            }
            const max = d3.max(data, d => Math.abs(d.lifeExp))
            const min= d3.min(data, d => Math.abs(d.value))

            const xScale = this.xScale
            .domain([0, 10000])
            .range([ 0, svgDimensions.width ]);

            const yScale = this.yScale
            .domain([35, 90])
            .range([ svgDimensions.height, 0]);
              
            const zScale = this.zScale
                .domain([200000, 1310000000])
                .range([ 1, 40]);
          return(  
            <svg width={svgDimensions.width+ margins.left + margins.right} height={svgDimensions.height+ margins.top + margins.bottom}>
                <Axes
                  scales={{ xScale, yScale, zScale }}
                  margins={margins}
                  svgDimensions={svgDimensions}
                />
                <Bubble  
                  scales={{ xScale, yScale, zScale }}
                  margins={margins}
                  data={data}
                  // maxValue={max}
                  // minValue={min}
                  svgDimensions={svgDimensions}          
                />   
            </svg>
          )
        }
}