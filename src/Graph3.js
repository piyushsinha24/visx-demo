import React, { Component } from 'react';
import './Graph.css';
import {
    AnimatedAxis,
    AnimatedGrid,
    AnimatedLineSeries,
    AnimatedAreaSeries,
    XYChart,
    Tooltip,
  } from '@visx/xychart';

import CustomChartBackground from './CustomChartBackground';

  const PlannedDeployment = [
    { x: "1 Feb'21", y: 0, total: 0 },
    { x: "17 Mar'21", y: 1, total: 1 },
    { x: "29 Mar'21", y: 2, total: 3 },
    { x: "2 Apr'21", y: 1, total: 4 },
    { x: "5 Apr'21", y: 2, total: 6 },
    { x: "28 Apr'21", y: 1, total: 7 },
    { x: "17 May'21", y: 2, total: 9 },
    { x: "20 May'21", y: 1, total: 10 },
    { x: "24 May'21", y: 1, total: 11 },
    { x: "29 May'21", y: 1, total: 12 },
    { x: "3 Jun'21", y: 1, total: 13 },
    { x: "8 Jun'21", y: 1, total: 14 },
    { x: "19 Jun'21", y: 1, total: 15 },
    { x: "23 Jun'21", y: 1, total: 16 },
    { x: "28 Jun'21", y: 1, total: 17 },
    { x: "3 Jul'21", y: 1, total: 18 },
    { x: "8 Jul'21", y: 1, total: 19 },
    { x: "20 Jul'21", y: 1, total: 20 },
    { x: "24 Jul'21", y: 1, total: 21 },
    { x: "29 Jul'21", y: 1, total: 22 },
    { x: "3 Aug'21", y: 1, total: 23 },
    { x: "8 Aug'21", y: 1, total: 24 },
    { x: "19 Aug'21", y: 1, total: 25 },
    { x: "23 Aug'21", y: 1, total: 26 },
    { x: "28 Aug'21", y: 1, total: 27 },
    { x: "02 Sept'21", y: 1, total: 28 },
  ];
  
  const ActualDeployment = [
    { x: "1 Feb'21", y: 2, total: 2 },
    { x: "17 Mar'21", y: 1, total: 3 },
    { x: "29 Mar'21", y: 0, total: 3 },
    { x: "2 Apr'21", y: 0, total: 3 },
    { x: "5 Apr'21", y: 0, total: 3 },
    { x: "28 Apr'21", y: 0, total: 3 },
    { x: "17 May'21", y: 0, total: 3 },
    { x: "20 May'21", y: 0, total: 3 },
    { x: "24 May'21", y: 0, total: 3 },
    { x: "29 May'21", y: 0, total: 3 },
    { x: "3 Jun'21", y: 0, total: 3 },
    { x: "8 Jun'21", y: 0, total: 3 },
    { x: "19 Jun'21", y: 0, total: 3 },
    { x: "23 Jun'21", y: 0, total: 3 },
    { x: "28 Jun'21", y: 0, total: 3 },
    { x: "3 Jul'21", y: 0, total: 3 },
    { x: "8 Jul'21", y: 0, total: 3 },
    { x: "20 Jul'21", y: 0, total: 3 },
    { x: "24 Jul'21", y: 0, total: 3 },
    { x: "29 Jul'21", y: 0, total: 3 },
    { x: "3 Aug'21", y: 0, total: 3 },
    { x: "8 Aug'21", y: 0, total: 3 },
    { x: "19 Aug'21", y: 0, total: 3 },
    { x: "23 Aug'21", y: 0, total: 3 },
    { x: "28 Aug'21", y: 0, total: 3 },
    { x: "02 Sept'21", y: 0, total: 3 },
  ];
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
    totalAccessor: d => d.total
  };

  const colors = {"Planned Deployment":"#0e8ff9", "Actual Deployment": "#ff6200"};
  
  
  class Graph3 extends Component {
      render() {
          return (
            <div>
            <h2>Planned Deployment Vs Actual Deployment</h2>
            <XYChart height={600} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedAxis orientation="left"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedLineSeries dataKey="Planned Deployment" data={PlannedDeployment} {...accessors} stroke={"#0e8ff9"}/>
            <AnimatedLineSeries dataKey="Actual Deployment" data={ActualDeployment} {...accessors} stroke={"#ff6200"}/>
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData }) => (
                <div style={{ padding: "4px"}}>
                  <div style={{ marginBottom: "8px", color: colors[tooltipData.nearestDatum.key]  ,textDecoration: "underline" }}>
                    {tooltipData.nearestDatum.key}
                  </div>
                  {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                  {": "}
                  {accessors.yAccessor(tooltipData.nearestDatum.datum)}
                  <p>Total: {accessors.totalAccessor(tooltipData.nearestDatum.datum)}</p>
                </div>
              )}
            />
          </XYChart>
          <div className="sidebyside">
          <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedAxis orientation="left"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedAreaSeries dataKey="Planned Deployment" data={PlannedDeployment} {...accessors} stroke={"#0e8ff9"} fill={"#0e8ff9"} fillOpacity={0.6}/>
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData }) => (
                <div style={{ padding: "4px"}}>
                  <div style={{ marginBottom: "8px", color: colors[tooltipData.nearestDatum.key]  ,textDecoration: "underline" }}>
                    {tooltipData.nearestDatum.key}
                  </div>
                  {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                  {": "}
                  {accessors.yAccessor(tooltipData.nearestDatum.datum)}
                  <p>Total: {accessors.totalAccessor(tooltipData.nearestDatum.datum)}</p>
                </div>
              )}
            />
          </XYChart>
          <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedAxis orientation="left"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedAreaSeries dataKey="Actual Deployment" data={ActualDeployment} {...accessors} stroke={"#ff6200"} fill={"#ff6200"} fillOpacity={0.8} />
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData }) => (
                <div style={{ padding: "4px"}}>
                  <div style={{ marginBottom: "8px", color: colors[tooltipData.nearestDatum.key]  ,textDecoration: "underline" }}>
                    {tooltipData.nearestDatum.key}
                  </div>
                  {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                  {": "}
                  {accessors.yAccessor(tooltipData.nearestDatum.datum)}
                  <p>Total: {accessors.totalAccessor(tooltipData.nearestDatum.datum)}</p>
                </div>
              )}
            />
          </XYChart>
          </div>
            </div>
          )
      }
  }

  export default Graph3;

 