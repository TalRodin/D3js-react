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
            <svg  width={width+ margins.left + margins.right} height={height + margins.top + margins.bottom} >
              <CirleBar
                width={width}
                height={height}
                scales={{ xScale, yScale, ybisScale}}
                innerRadius={innerRadius}
                margins={margins}
                cornerRadius={3}
                padAngle={0.01}
                padRadius={innerRadius}
                data={data} />
            </svg>
          </div> 
        );
```
CircleBar component

```
  render() {
      let {data, width, height,margins} = this.props;
      return (
        <g transform={"translate(" + (width/2 + margins.left) + "," + (height/2 + margins.top) + ")"}>
          {data.map(this.renderSlice)}
        </g>
      );
    }
```

function renderSlice
```
   renderSlice(v) {
        let {innerRadius,cornerRadius, padAngle,scales} = this.props;
        return (
          <>
          <Slice
            innerRadius={innerRadius}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={v.value}
            endAngle={scales.xScale(v.name) + scales.xScale.bandwidth()}
            padradius={innerRadius}
            outerRadius={scales.yScale(v.value)}
            startAngle={scales.xScale(v.name)}
            />
            <Slice2
            innerRadius={scales.ybisScale(0)}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={v.value}
            endAngle={scales.xScale(v.name) + scales.xScale.bandwidth()}
            padradius={innerRadius}
            outerRadius={scales.ybisScale(v.value)}
            startAngle={scales.xScale(v.name)}
            />
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
      <g  >
        <path d={arc(value)} fill={"#758db7"} />
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
        <path d={arc(value)} fill={"#fb7a8e"} />
      </g>
    );
```

# Credits
[observablehq](https://observablehq.com/)

# License
[MIT](https://choosealicense.com/licenses/mit/) © Alyona Rodina





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
