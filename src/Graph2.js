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

  const PlannedDemand = [
    { x: "Jan'21", y: 10, total: 10 },
    { x: "Feb'21", y: 23, total: 33 },
    { x: "Mar'21", y: 27, total: 60 },
    { x: "Apr'21", y: 32, total: 92 },
    { x: "May'21", y: 40, total: 132 },
    { x: "Jun'21", y: 45, total: 177 },
    { x: "Jul'21", y: 50, total: 227 },
    { x: "Aug'21", y: 55, total: 282 },
    { x: "Sep'21", y: 65, total: 347 },
    { x: "Oct'21", y: 75, total: 422 },
    { x: "Nov'21", y: 85, total: 507 },
    { x: "Dec'21", y: 100, total: 607 },
  ];
  
  const PlannedSupply = [
    { x: "Jan'21", y: 10, total: 10 },
    { x: "Feb'21", y: 18, total: 28 },
    { x: "Mar'21", y: 24, total: 52 },
    { x: "Apr'21", y: 30, total: 82 },
    { x: "May'21", y: 36, total: 118 },
    { x: "Jun'21", y: 40, total: 158 },
    { x: "Jul'21", y: 46, total: 204 },
    { x: "Aug'21", y: 50, total: 254 },
    { x: "Sep'21", y: 55, total: 309 },
    { x: "Oct'21", y: 60, total: 369 },
    { x: "Nov'21", y: 65, total: 434 },
    { x: "Dec'21", y: 75, total: 509 },
  ];
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
    totalAccessor: d => d.total
  };

  const colors = {"Planned Demand":"#0e8ff9", "Planned Supply": "#ff6200"};
  
  
  class Graph2 extends Component {
      render() {
          return (
            <div>
            <h2>Planned Demand Vs Planned Supply</h2>
            <XYChart height={600} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedAxis orientation="left"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedLineSeries dataKey="Planned Demand" data={PlannedDemand} {...accessors} stroke={"#0e8ff9"}/>
            <AnimatedAreaSeries dataKey="Planned Supply" data={PlannedSupply} {...accessors} stroke={"#ff6200"} fill={"#ff6200"} fillOpacity={"0.8"}/>
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
            <AnimatedAreaSeries dataKey="Planned Demand" data={PlannedDemand} {...accessors} stroke={"#0e8ff9"} fill={"#0e8ff9"} fillOpacity={0.6}/>
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
            <AnimatedAreaSeries dataKey="Planned Supply" data={PlannedSupply} {...accessors} stroke={"#ff6200"} fill={"#ff6200"} fillOpacity={0.8}/>
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

  export default Graph2;

 