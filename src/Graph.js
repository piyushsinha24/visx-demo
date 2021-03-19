import React, { Component } from 'react';
import {
    AnimatedAxis,
    AnimatedGrid,
    AnimatedAreaSeries,
    XYChart,
    Tooltip,
  } from '@visx/xychart';

import CustomChartBackground from './CustomChartBackground';

  const AssociateCount = [
    { x: "Oct'20", y: 0 },
    { x: "Nov'20", y: 4 },
    { x: "Dec'20", y: 6 },
    { x: "Jan'21", y: 8 },
    { x: "Feb'21", y: 12 },
    { x: "Mar'21", y: 16 },
  ];
  
  const SelectedCount = [
    { x: "Oct'20", y: 0 },
    { x: "Nov'20", y: 1 },
    { x: "Dec'20", y: 2 },
    { x: "Jan'21", y: 4 },
    { x: "Feb'21", y: 6 },
    { x: "Mar'21", y: 8 },
  ];
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
  };
  
  
  class Graph extends Component {
      render() {
          return (
            <XYChart height={600} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <CustomChartBackground />
            <AnimatedAxis orientation="bottom"/>
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedAreaSeries dataKey="Associate Count" data={AssociateCount} {...accessors} fillOpacity={0.6}/>
            <AnimatedAreaSeries dataKey="Selected in CI" data={SelectedCount} {...accessors} fillOpacity={0.6}/>
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData, colorScale }) => (
                <div>
                  <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                    {tooltipData.nearestDatum.key}
                  </div>
                  {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                  {', '}
                  {accessors.yAccessor(tooltipData.nearestDatum.datum)}
                </div>
              )}
            />
          </XYChart>
          )
      }
  }

  export default Graph;

 