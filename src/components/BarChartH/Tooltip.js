import React from 'react'
import styled from 'styled-components'

const Tool =styled.div`
    width:40px;
    height:40px;
    position:absolute;
    width: 100px;
    background-color: #f5f5f5;
    color: black;
    text-align: center;
    border-radius: 6px;
    // z-index: 1;
    transition: opacity 0.3s;
//   &:after{
//     content: "";
//     position: absolute;
//     top: 100%;
//     left: 50%;
//     margin-left: -5px;
//     border-width: 5px;
//     border-style: solid;
//     border-color: #f5f5f5 transparent transparent transparent;
//   }
`
export default ({data, scales}) => {
    const { xScale, yScale } = scales
    const styles = {
      left: `${xScale(data.name)}px`,
      top: `${yScale(data.value)}px`,

    }
    return (
 
        <Tool style={styles} >
          {data.name}<br/>
          {data.value}
        </Tool>

    )
  }