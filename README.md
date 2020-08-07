# D3js-react
The project is about D3js plots build in React.

# Motivation
This project has been created to quickly and effortlessly build beautiful D3js plots in the React app.


# Examples:
![Circle Bar Chart](/public/CircleBarChart.png?raw=true)
![Line Bar Chart](/public/LineBarChart.png?raw=true)
![Stacked Bar Chart](/public/StackedBarChart.png?raw=true)
![Double Line Chart](/public/DoubleLine.png?raw=true)
![Pie Chart](/public/PieChart.png?raw=true)

# Tech/framework used
Build with:
   1. [React](https://github.com/facebook/react)
   2. [D3js](https://github.com/d3/d3)

# Features

Charts, plots, graphs build in REACT using functions D3js/svg. 
They can be easily integrated into any React app, without much knowledge of SVG

# Code Example
CircleBarTitleDiverging.js

```
return (
          <div>
            <svg  width = {width+ margins.left + margins.right} height = {height + margins.top + margins.bottom}>
              <CirleBar
                width = {width}
                height = {height}
                scales = {{ xScale, yScale, ybisScale}}
                innerRadius = {innerRadius}
                margins = {margins}
                cornerRadius = {3}
                padAngle = {0.01}
                padRadius = {innerRadius}
                data = {data} />
            </svg>
          </div> 
        );
```
CircleBar component

```
  render() {
      let {data, width, height, margins} = this.props;
      return (
        <g transform = {"translate(" + (width/2 + margins.left) + "," + (height/2 + margins.top) + ")"}>
          {data.map(this.renderSlice)}
        </g>
      );
    }
```
function renderSlice()

```
   renderSlice(v) {
        let {innerRadius, cornerRadius, padAngle, scales} = this.props;
        return (
        <>
          <Slice
            innerRadius = {innerRadius}
            cornerRadius = {cornerRadius}
            padAngle = {padAngle}
            value = {v.value}
            endAngle = {scales.xScale(v.name) + scales.xScale.bandwidth()}
            padradius = {innerRadius}
            outerRadius = {scales.yScale(v.value)}
            startAngle = {scales.xScale(v.name)}
            />
            <Slice2
            innerRadius = {scales.ybisScale(0)}
            cornerRadius = {cornerRadius}
            padAngle = {padAngle}
            value = {v.value}
            endAngle = {scales.xScale(v.name) + scales.xScale.bandwidth()}
            padradius = {innerRadius}
            outerRadius = {scales.ybisScale(v.value)}
            startAngle = {scales.xScale(v.name)}
            />
        </>
```
Slice.js

```
let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(padAngle)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .padRadius(innerRadius)
    
    return (
      <g>
        <path d={arc(value)} fill = {"#758db7"} />
      </g>
    );
```
Slice2.js

```
let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(padAngle)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .padRadius(innerRadius)
    
    return (
      <g>
        <path d = {arc(value)} fill = {"#fb7a8e"} />
      </g>
    );
```

# Credits
[observablehq](https://observablehq.com/)

# License
[MIT](https://choosealicense.com/licenses/mit/) © Alyona Rodina



