import React, {useState} from 'react'
import {schemeCategory10} from 'd3-scale-chromatic'
import * as d3 from 'd3';
import Tooltip from './Tooltip'


function Bars({scales,data,onMouseOverCallback,onMouseOutCallback}){
      const { xScale, yScale } = scales
      const [show, setShow] = useState(false);

      const bars = (
        data.map(datum =>
          <g >
            <rect
              className='content'
              key={datum.name}
              x={xScale(Math.min(0, datum.value))}  
              y={yScale(datum.name)}
              height={yScale.bandwidth()}
              width={Math.abs(xScale(datum.value) - xScale(0))}
              fill={schemeCategory10[datum.value > 0 ? 0 : 3]}
              onMouseEnter={() => setShow(datum)} 
              onMouseLeave={() => setShow(null)}
            >
       
            </rect>
            {show? (
          <Tooltip
            data={show}
            scales={{ xScale, yScale }}
          />
        ) : null}
          </g>
        )
      )
      return (
        <>
          {bars} 
     
        </>
      )
    }
export default Bars