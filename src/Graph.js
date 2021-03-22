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

  const OnboardedCount = [
    { x: "Oct'20", y: 0, total: 0 },
    { x: "Nov'20", y: 2, total: 2 },
    { x: "Dec'20", y: 4, total: 6 },
    { x: "Jan'21", y: 3, total: 9 },
    { x: "Feb'21", y: 4, total: 13 },
    { x: "Mar'21", y: 3, total: 16 },
  ];
  
  const DeployedCount = [
    { x: "Oct'20", y: 0, total: 0 },
    { x: "Nov'20", y: 1, total: 1 },
    { x: "Dec'20", y: 2, total: 3 },
    { x: "Jan'21", y: 2, total: 5 },
    { x: "Feb'21", y: 3, total: 8 },
    { x: "Mar'21", y: 0, total: 8 },
  ];
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
    totalAccessor: d => d.total
  };

  const colors = {"Onboarded Count":"#0e8ff9", "Deployed Count": "#ff6200"};
  
  
  class Graph extends Component {
      render() {
          return (
            <div>
              <XYChart height={600} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedAxis orientation="left"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedLineSeries dataKey="Onboarded Count" data={OnboardedCount} {...accessors} stroke={"#0e8ff9"}/>
            <AnimatedLineSeries dataKey="Deployed Count" data={DeployedCount} {...accessors} stroke={"#ff6200"} fill={"#ff6200"}/>
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
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
            <AnimatedAreaSeries dataKey="Onboarded Count" data={OnboardedCount} {...accessors} stroke={"#0e8ff9"} fill={"#0e8ff9"} fillOpacity={0.6}/>
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
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
            <AnimatedLineSeries dataKey="Deployed Count" data={DeployedCount} {...accessors} stroke={"#ff6200"} fill={"#ff6200"} fillOpacity={0.6}/>
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
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

 