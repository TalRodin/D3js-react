import React from 'react';
import BarChartH from './components/BarChartH/BarChart'
import BarChartV from './components/BarChartV/BarChart'
import BarChartHdiverging from './components/BarChartHdiverging/BarChart'
import BarChartVdiverging from './components/BarChartVdiverging/BarChart'
import PieChart from './components/PieChart/PieChart'
import PieChartWhole from './components/PieChartWhole/PieChart'
function App() {
  return (
    <div >
       <BarChartH />
       <BarChartV />
       <BarChartHdiverging />
       <BarChartVdiverging />
       <PieChart />
       <PieChartWhole />
    </div>
  );
}

export default App;
