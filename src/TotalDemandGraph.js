import React, { Component } from 'react';
import './MegaGraph.css';
import {
    AnimatedAxis,
    AnimatedGrid,
    AnimatedAreaSeries,
    lightTheme,
    XYChart,
    Tooltip,
  } from '@visx/xychart';

import CustomChartBackground from './CustomChartBackground';

const myColors = ["rgb(102, 217, 232)", "rgb(252, 196, 25)", "rgb(255, 135, 135)"];

const customTheme = {
  ...lightTheme,
  // order should match XYChart child series render order 
  colors: [...myColors],
};

  const TotalDemand = [
    { x: "Feb'21", z: 2, y: 2 },
    { x: "Mar'21", z: 3, y: 5 },
    { x: "Apr'21", z: 13, y: 18 },
    { x: "May'21", z: 9, y: 27 },
    { x: "Jun'21", z: 5, y: 32 },
  ];
  
  const NL = [
    { x: "Feb'21", z: 2, y: 2 },
    { x: "Mar'21", z: 2, y: 4 },
    { x: "Apr'21", z: 7, y: 11 },
    { x: "May'21", z: 2, y: 13 },
    { x: "Jun'21", z: 1, y: 14 },
  ];

  const BE = [
    { x: "Mar'21", z: 1, y: 1 },
    { x: "Apr'21", z: 6, y: 7 },
    { x: "May'21", z: 7, y: 14 },
    { x: "Jun'21", z: 4, y: 18 },
  ];
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
    zAccessor: d => d.z
  };
  
  class TotalDemandGraph extends Component {
      render() {
          return (
            <div>
            <div className="color-divs">
                <div style={{backgroundColor: "rgb(102, 217, 232)", width: "30px", height: "30px", margin: "4px"}}></div>
                <p>Total Demand</p>
                <div style={{backgroundColor: "rgb(252, 196, 25)", width: "30px", height: "30px", margin: "4px"}}></div>
                <p>NL</p>
                <div style={{backgroundColor: "rgb(255, 135, 135)", width: "30px", height: "30px", margin: "4px", opacity: "0.8"}}></div>
                <p>BE</p>
            </div>
            <XYChart theme={customTheme} height={600} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedAxis orientation="left"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedAreaSeries dataKey="Total Demand" data={TotalDemand} {...accessors}/>
            <AnimatedAreaSeries dataKey="NL" data={NL} {...accessors}/>
            <AnimatedAreaSeries dataKey="BE" data={BE} {...accessors}/>
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

  export default TotalDemandGraph;

 