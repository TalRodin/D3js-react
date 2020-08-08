import React from 'react';
import BarChartH from './components/BarChartH/BarChart'
import BarChartV from './components/BarChartV/BarChart'
import BarChartHdiverging from './components/BarChartHdiverging/BarChart'
import BarChartVdiverging from './components/BarChartVdiverging/BarChart'
import PieChart from './components/PieChart/PieChart'
import PieChartWhole from './components/PieChartWhole/PieChart'
import LineChartM from './components/LineChartM/LineChart'
import LineChartY from './components/LineChartY/LineChart'
import LineChartD from './components/LineChartD/LineChart'
import BubbleChart from './components/BubbleChart/BubbleChart'
import LineChartDouble from './components/LineChartDouble/LineChart'
import AreaChart from './components/AreaChart/LineChart'
import LineBarChart from './components/LineBarChart/LineBarChart'
import StackedBar from './components/StackedBar/StackedBar'
import StackedBarV from './components/StackedBarV/StackedBarV'
import CircleBar from './components/CircleBar/CircleBar'
import CircleBarTitle from './components/CircleBarTitle/CircleBar'
import CircleBarDiverging from './components/CircleBarTitleDiverging/CircleBarTitleDiverging'
import StackedBarDiverging from './components/StackedBarDiverging/StackedBar'



function App() {
  return (
    <div >
       {/* <BarChartH /> */}
       {/* <BarChartV /> */}
       <BarChartHdiverging />
       {/* <BarChartVdiverging />
       <PieChart />
       <PieChartWhole />
       <LineChartM />
       <LineChartY />
       <LineChartD />
       <BubbleChart />
       <LineChartDouble />
       <AreaChart />
       <LineBarChart />
       <StackedBar />
       <StackedBarV />
       <CircleBar />
       <CircleBarTitle />
       <CircleBarDiverging /> */}
       {/* <StackedBarDiverging />  */}
    </div>
  );
}

export default App;
