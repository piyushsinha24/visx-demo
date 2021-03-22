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

  const Demand = [
    { x: "Jan'21", y: 10, total: 10 },
    { x: "Feb'21", y: 13, total: 23 },
    { x: "Mar'21", y: 4, total: 27 },
    { x: "Apr'21", y: 5, total: 32 },
    { x: "May'21", y: 8, total: 40 },
    { x: "Jun'21", y: 5, total: 45 },
    { x: "Jul'21", y: 5, total: 50 },
    { x: "Aug'21", y: 5, total: 55 },
    { x: "Sep'21", y: 10, total: 65 },
    { x: "Oct'21", y: 10, total: 75 },
    { x: "Nov'21", y: 10, total: 85 },
    { x: "Dec'21", y: 15, total:100 },
  ];
  
  const Supply = [
    { x: "Jan'21", y: 10, total: 10 },
    { x: "Feb'21", y: 8, total: 18 },
    { x: "Mar'21", y: 6, total: 24 },
    { x: "Apr'21", y: 6, total: 30 },
    { x: "May'21", y: 6, total: 36 },
    { x: "Jun'21", y: 4, total: 40 },
    { x: "Jul'21", y: 6, total: 46 },
    { x: "Aug'21", y: 4, total: 50 },
    { x: "Sep'21", y: 5, total: 55 },
    { x: "Oct'21", y: 5, total: 60 },
    { x: "Nov'21", y: 5, total: 65 },
    { x: "Dec'21", y: 5, total: 75 },
  ];
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
    totalAccessor: d => d.total
  };

  const colors = {"Demand":"#0e8ff9", "Supply": "#ff6200"};
  
  
  class Graph extends Component {
      render() {
          return (
            <div>
            <h2>Demand Vs Supply</h2>
            <XYChart height={600} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedAxis orientation="left"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedAreaSeries dataKey="Demand" data={Demand} {...accessors} stroke={"#0e8ff9"} fill={"#0e8ff9"} fillOpacity={"0.6"}/>
            <AnimatedAreaSeries dataKey="Supply" data={Supply} {...accessors} stroke={"#ff6200"} fill={"#ff6200"} fillOpacity={"0.8"}/>
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
            <AnimatedAreaSeries dataKey="Demand" data={Demand} {...accessors} stroke={"#0e8ff9"} fill={"#0e8ff9"} fillOpacity={0.6}/>
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
            <AnimatedAreaSeries dataKey="Supply" data={Supply} {...accessors} stroke={"#ff6200"} fill={"#ff6200"} fillOpacity={0.8}/>
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

  export default Graph;

 