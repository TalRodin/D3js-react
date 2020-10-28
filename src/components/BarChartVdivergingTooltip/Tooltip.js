import React from 'react'
import styled from 'styled-components'

const Tool =styled.div`
    width: 120px;
    background-color: #eee;
    color: #414141;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 110%;
    opacity:0.8;
    transition: opacity 0.3s;
    &:after{
      content: "";
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent #eee transparent transparent;
    }
`
export default ({data, scales}) => {
    // const { xScale, yScale } = scales
    // const styles = {
    //   left: `${xScale(data.value)}px`,
    //   top: `${yScale(data.name)}px`,
    // }
    console.log(data)
    return (
        <div >
          {<h1>hello</h1>}
          {/* {data.name}<br/>
          {data.value} */}
        </div>
    )
  }