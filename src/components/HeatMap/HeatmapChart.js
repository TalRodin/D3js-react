import React, { Component } from 'react';
import Heatmap from './Heatmap';
import data from './data/data'
import { scaleBand} from 'd3-scale'
import * as d3 from 'd3'
import Axes from './Axes'

class Heat extends Component {
    constructor() {
        super()
        this.xScale = scaleBand()
        this.yScale = scaleBand()
        
      }
    render() {
        const margin = {top: 30, right: 30, bottom: 30, left: 30}

        const svgDimensions = {
            width: 450 - margin.left - margin.right,
            height: 450 - margin.top - margin.bottom
          }
        const myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        const myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]

        const xScale = this.xScale
              .padding(0.01)
              .domain(myGroups)
              .range([0,svgDimensions.width])
      
        const yScale = this.yScale
                .padding(0.01)
                .domain(myVars)
                .range([svgDimensions.height,0])
                    
        return (
          <div>
            <svg width={svgDimensions.width + margin.left + margin.right} height={svgDimensions.height + margin.top + margin.bottom}  >
            <Axes
          scales={{ xScale, yScale}}
          margins={margin}
          svgDimensions={svgDimensions}
        />
              <Heatmap 
                data={data} 
                margins={margin}
                scales={{ xScale, yScale}}
                svgDimensions={svgDimensions}
                />
               
               
            </svg>
          </div> 
        );
      }
}
export default Heat;