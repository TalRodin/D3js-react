import React from 'react'
import Axis from './Axis'

export default ({ scales, svgDimensions }) => {
    const { height} = svgDimensions
    const xProps = {
      orient: 'Bottom',
      scale: scales.xScale,
      translate: `translate(0, ${height})`,
    }
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,

    }
    return (
      <g>
        <Axis {...xProps} />
        <Axis {...yProps} />
      </g>
    )
  }