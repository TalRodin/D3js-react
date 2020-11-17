# D3js-react
The project is about D3js plots build in React.
https://d3react-88ba6.web.app/

# Motivation
This project has been created to quickly and effortlessly build beautiful D3js plots in the React app.


# Examples:
![PieChartTitles](/public/Heatmap.png?raw=true)
![Heatmap](/public/Heatmap.png?raw=true)
![Ridge Chart](/public/RidgeChart.png?raw=true)
![Chord Chart](/public/ChordChart.png?raw=true)
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
# Contributing to D3js-react

:blush::+1: Thank you for taking the time to contribute!

These are guidelines. Please feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it. Here, we respect each other, learn, teach. By participating, you are expected to uphold this code. 

## Steps to contribute

If you are a first time contributer: 
[First Contributions](https://github.com/firstcontributions/first-contributions)

Before create the plot/chart/graph:
* Please review the previous work and follow similar code structure.
* Please make small components for each part of the plot. Example Bar and Line Chart: Axes.js, Axis.js, Bars.js, Line.js, and LineBarChart.js. If it has tooltip - it will be Tooltip.js file, etc.

# Credits
[observablehq](https://observablehq.com/)

# License
[MIT](https://choosealicense.com/licenses/mit/) © Alyona Rodina



