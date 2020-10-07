import React from 'react'
import styled from 'styled-components'
import * as d3 from 'd3';
const Tool =styled.div`
    width: 100px;
    height:100px;
    z-index: 1;
    position: absolute;
    background-color: #eee;
    color: #414141;
    top: 35%;
    left:35%;
    text-align: center;
    border-radius: 3px;
    padding-top: 5px;
    opacity:0.8;
    transition: opacity 0.3s;
    // &:after{
    //   content: "";
    //   position: absolute;
    //   top: 50%;
    //   right: 100%;
    //   margin-top: -5px;
    //   border-width: 5px;
    //   border-style: solid;
    //   border-color: transparent #eee transparent transparent;
    // }
`
export default ({data}) => {
    console.log(data)
    const styles = {

    }
    return (
        <Tool styled={{styles}}>
          <br/>
          {data.l}<br/>
          {data.value.value}
        </Tool>

    )
  }