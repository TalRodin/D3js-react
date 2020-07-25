import React from 'react'
import Axis from './Axis'

export default ({ scales, margins, svgDimensions }) => {
    const { height, width } = svgDimensions
  
    const xProps = {
      orient: 'Top',
      scale: scales.xScale,
      translate: `translate(0,${margins.top})`,
      tickSize: 4,
      // ticks:width/80
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${scales.xScale(0)},0)`,
      tickSize: 0,
      tickPadding:6
    }
    return (

      <g>
        <Axis {...xProps} />
        <Axis {...yProps} />
      </g>
    )
  }