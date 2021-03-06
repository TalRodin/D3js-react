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
import GroupedBarChart from './components/GroupedBarChart/BarChart'
import BubbleBasic from './components/BubbleBasic/BubbleChart'
import BubbleBasicColor from './components/BubbleBasicColor/BubbleChart'
import MissingLineChart from './components/MissingLineChart/LineChart'
import MissingAreaChart from './components/MissingAreaChart/LineChart'
import AreaLineChart from './components/AreaLineChart/LineChart'
import AreaStackedChart from './components/AreaStackedChart/LineChart'
import ScatterPlotBasic from './components/ScatterPlotBasic/LineChart'
import ScatterPlotMultipleSeries from './components/ScatterPlotMultipleSeries/LineChart'
import StackedBarDivergingH from './components/StackedBarDivergingH/StackedBar'
import CircleBarStack from './components/CircleBarStack/CircleBar'
import ChordChard from './components/ChordChart/ChordChart'
import ChordChardColor from './components/ChordChartColor/ChordChart'
import StreamGraph from './components/StreamGraph/LineChart'
import RidgeChart from './components/RidgeChart/LineChart'
import BarChartHTitles from './components/BarChartHTitles/BarChart'
import BarChartVTitles from './components/BarChartVTitles/BarChart'
import HeatmapChart from './components/HeatMap/HeatmapChart'
import PieChartLabels from './components/PieChartLabels/PieChart'
import PieChartTooltip from './components/PieChartTooltip/PieChart'
import LineChartConfidenceint from'./components/LineChartConfidenceinterv/LineChart'
import Lollipop from './components/Lollipop/BubbleChart'
import LollipopV from './components/LollipopV/BubbleChart'
import LollipopCleveland from './components/LollipopCleveland/BubbleChart'
import ChordChardTitles from './components/ChordChartTitles/ChordChart'
import ArcDiagram from './components/ArcDiagram/BubbleChart'
import ArcDiagramVert from './components/ArcDiagramVert/BubbleChart'
import Hexbin from './components/HexbinChart/BubbleChart'
import Density2d from './components/Density2d/BubbleChart'
import BasicCounter from './components/BasicCounter/BubbleChart'
import RidgeChartColor from './components/RidgeChartColor/LineChart'
import LineChartInlineLabels from './components/LineChartInlineLabels/LineChart'
import Dendrogram from './components/Dendrogram/BubbleChart'
import RadialDendrogram from './components/RadialDendrogram/BubbleChart'
import BarChartHTitlesMouse from './components/BarChartHTitlesMouse/BarChart'
import BarChartVTitlesMouse from './components/BarChartVTitlesMouse/BarChart'
import BarChartVdivergingNoValues from './components/BarChartVdivergingNoValues/BarChart'
import BarChartVdivergingMouse from './components/BarChartVdivergingMouse/BarChart'
import BarChartVdivergingTooltip from './components/BarChartVdivergingTooltip/BarChart'
import CircleBarColor from './components/CircleBarColor/CircleBar'
import CircleBarSize from './components/CircleBarSize/CircleBar'
import CircleBarTooltip from './components/CircleBarTooltip/CircleBar'
import HeatmapChartTooltip from './components/HeatMapTooltip/HeatmapChart'
import PieChartIncrSlice from './components/PieChartIncrSlice/PieChart'
import PieChartMadeTooltip from './components/PieChartMadeTooltip/PieChart'
import HeatmapChartTooltipColor from './components/HeatMapTooltipColor/HeatmapChart'
import BubbleBasicTooltip from './components/BubbleBasicTooltip/BubbleChart'
// import ScatterPlot from './components/ScatterPlot/BubbleChart'


function App() {
  return (
    <div >
      {/* <ScatterPlot/> */}
      {/* <BubbleChart /> */}
      {/* <BubbleBasic />
      <BubbleBasicTooltip /> */}
      {/* <BubbleBasicColor /> */}
      {/* <PieChart />
      <PieChartTooltip/>
      <PieChartLabels/>
      <PieChartWhole />
      <PieChartIncrSlice/>
      <PieChartMadeTooltip /> */}
      
      {/* <HeatmapChartTooltip/>
      <HeatmapChart/>
      <HeatmapChartTooltipColor/> */}

      {/* <BarChartVdivergingMouse/>
      <BarChartHTitlesMouse/>
      <BarChartVTitles /> 
      <BarChartVTitlesMouse/>
      <BarChartHTitles />
      <BarChartVdiverging />
      <BarChartVdivergingNoValues/>
      <BarChartHdiverging />
      <BarChartVdivergingTooltip/>
      <CircleBar />
      <CircleBarSize />
      <CircleBarColor/>
      <CircleBarTitle />
      <CircleBarDiverging />
      <BarChartV />
      <BarChartH />
      <RidgeChart />
      <RidgeChartColor/>
      <RadialDendrogram/>
      <Dendrogram/>
      <BasicCounter/>
      <LineChartInlineLabels/>
      <CircleBarTooltip/>
      <Density2d/>
      <Hexbin/>
      <ArcDiagramVert/>
      <ArcDiagram/>
      <LollipopCleveland/>
      <LollipopV/>
      <Lollipop/>
      <StreamGraph/>
      <StackedBar />
      <StackedBarV />
      <GroupedBarChart />
      <AreaChart />
      <AreaLineChart />
      <AreaStackedChart/>
      <LineBarChart /> */}

      {/* <ChordChardTitles/>
      <ChordChard/>
      <ChordChardColor/>
      <CircleBarStack /> */}
      <LineChartConfidenceint/>
      <LineChartM />
      <LineChartY />
      <LineChartD />
      <LineChartDouble />
      <MissingLineChart/>
      <MissingAreaChart /> 
      <StackedBarDiverging /> 
      <StackedBarDivergingH />

      <ScatterPlotBasic/>
      <ScatterPlotMultipleSeries/>
      
  
    </div>
  );
}

export default App;
