import React from 'react'
import Axisx from './Axisx'
import Axisy from './Axisy'
export default ({ scales, margins, svgDimensions,data }) => {
    const { height, width } = svgDimensions
    console.log(data)
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
      tickPadding:10,
      data:data
    }
    return (

      <g>
        <Axisx {...xProps} />
        <Axisy {...yProps} />
      </g>
    )
  }