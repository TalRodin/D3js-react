import React from 'react'
import styled from 'styled-components'

const Tool =styled.div`
    width:30px;
    height:30px;
    position:absolute;
    width: 100px;
    font-size:12px;
    background-color: #f5f5f5;
    color: black;
    text-align: center;
    border-radius: 6px;
    z-index: 1;
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
      left: `${xScale(data.value)}px`,
      top: `${yScale(data.name)}px`,

    }
    return (
 
        <Tool style={styles} >
          {data.name}<br/>
          {data.value}
        </Tool>

    )
  }