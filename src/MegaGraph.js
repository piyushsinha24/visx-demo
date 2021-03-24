import React, { Component } from 'react';
import './MegaGraph.css';
import {
    AnimatedAxis,
    AnimatedGrid,
    AnimatedLineSeries,
    AnimatedAreaSeries,
    lightTheme,
    XYChart,
    Tooltip,
  } from '@visx/xychart';

import CustomChartBackground from './CustomChartBackground';

const myColors = ["rgb(11, 114, 133)", "rgb(102, 217, 232)", "rgb(252, 196, 25)", "rgb(255, 135, 135)"];

const customTheme = {
  ...lightTheme,
  // order should match XYChart child series render order 
  colors: [...myColors],
};

  const Demand = [
    { x: "Jan'21", z: 10, y: 10 },
    { x: "Feb'21", z: 13, y: 23 },
    { x: "Mar'21", z: 4, y: 27 },
    { x: "Apr'21", z: 5, y: 32 },
    { x: "May'21", z: 8, y: 40 },
    { x: "Jun'21", z: 5, y: 45 },
    { x: "Jul'21", z: 5, y: 50 },
    { x: "Aug'21", z: 5, y: 55 },
    { x: "Sep'21", z: 10, y: 65 },
    { x: "Oct'21", z: 10, y: 75 },
    { x: "Nov'21", z: 10, y: 85 },
    { x: "Dec'21", z: 15, y:100 },
  ];
  
  const Supply = [
    { x: "Jan'21", z: 10, y: 10 },
    { x: "Feb'21", z: 8, y: 18 },
    { x: "Mar'21", z: 6, y: 24 },
    { x: "Apr'21", z: 6, y: 30 },
    { x: "May'21", z: 6, y: 36 },
    { x: "Jun'21", z: 4, y: 40 },
    { x: "Jul'21", z: 6, y: 46 },
    { x: "Aug'21", z: 4, y: 50 },
    { x: "Sep'21", z: 5, y: 55 },
    { x: "Oct'21", z: 5, y: 60 },
    { x: "Nov'21", z: 5, y: 65 },
    { x: "Dec'21", z: 10, y: 75 },
  ];

  const ActualSupply = [
    { x: "Jan'21", z: 8, y: 8 },
    { x: "Feb'21", z: 4, y: 12 },
    { x: "Mar'21", z: 6, y: 18 },
  ];

  const ActualDeployment = [
    { x: "Feb'21", z: 2, y: 2 },
    { x: "Mar'21", z: 1, y: 3 },
  ];
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
    zAccessor: d => d.z
  };
  
  class MegaGraph extends Component {
      render() {
          return (
            <div>
            <div className="color-divs">
                <div style={{backgroundColor: "rgb(11, 114, 133)", width: "30px", height: "30px", margin: "4px"}}></div>
                <p>Demand</p>
                <div style={{backgroundColor: "rgb(102, 217, 232)", width: "30px", height: "30px", margin: "4px"}}></div>
                <p>Supply</p>
                <div style={{backgroundColor: "rgb(252, 196, 25)", width: "30px", height: "30px", margin: "4px"}}></div>
                <p>Actual Supply</p>
                <div style={{backgroundColor: "rgb(255, 135, 135)", width: "30px", height: "30px", margin: "4px"}}></div>
                <p>Actual Deployment</p>
            </div>
            <XYChart theme={customTheme} height={600} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedAxis orientation="left"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedLineSeries dataKey="Demand" data={Demand} {...accessors}/>
            <AnimatedAreaSeries dataKey="Supply" data={Supply} {...accessors}/>
            <AnimatedAreaSeries dataKey="Actual Supply" data={ActualSupply} {...accessors}/>
            <AnimatedAreaSeries dataKey="Actual Deployment" data={ActualDeployment} {...accessors}/>
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData, colorScale}) => (
                <div style={{ padding: "4px"}}>
                  <div style={{ marginBottom: "8px", color: colorScale(tooltipData.nearestDatum.key)  ,textDecoration: "underline" }}>
                    {tooltipData.nearestDatum.key}
                  </div>
                  {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                  {": "}
                  {accessors.zAccessor(tooltipData.nearestDatum.datum)}
                  <p>Total: {accessors.yAccessor(tooltipData.nearestDatum.datum)}</p>
                </div>
              )}
            />
          </XYChart>
          </div>
          )
      }
  }

  export default MegaGraph;

 