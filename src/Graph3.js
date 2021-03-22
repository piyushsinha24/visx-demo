import React, { Component } from 'react';
import './Graph.css';
import {
    AnimatedAxis,
    AnimatedGrid,
    AnimatedAreaSeries,
    XYChart,
    Tooltip,
  } from '@visx/xychart';

import CustomChartBackground from './CustomChartBackground';

  const PlannedDeployment = [
    { x: "Feb'21", y: 0, total: 0 },
    { x: "Mar'21", y: 2, total: 2 },
    { x: "Apr'21", y: 9, total: 11 },
    { x: "May'21", y: 6, total: 17 },
    { x: "Jun'21", y: 5, total: 22 },
    { x: "Jul'21", y: 5, total: 27 },
    { x: "Aug'21", y: 5, total: 32 },
    { x: "Sep'21", y: 1, total: 33 },
  ];
  
  const ActualDeployment = [
    { x: "Feb'21", y: 2, total: 2 },
    { x: "Mar'21", y: 1, total: 3 },
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
            <AnimatedAreaSeries dataKey="Planned Deployment" data={PlannedDeployment} {...accessors} stroke={"#0e8ff9"} fill={"#0e8ff9"} fillOpacity={"0.6"}/>
            <AnimatedAreaSeries dataKey="Actual Deployment" data={ActualDeployment} {...accessors} stroke={"#ff6200"} fill={"#ff6200"} fillOpacity={"0.8"}/>
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

 