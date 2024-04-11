import React from "react";
import ReactEcharts from 'echarts-for-react';

function DemandSupplyGraphCumulative (props){
    return (
        <div>
               <p> Cumulative Demand vs Supply  </p>
                    <ReactEcharts  option={{
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                        },
                        textStyle : {
                            fontSize:13
                        }
                    },
                    legend: {
                        data: ['Cumulative Supply Internal','Cumulative Supply External', 'Revised Demand', 'Projected Demand']
                        
                    },
                    xAxis: [
                        {
                        type: 'category',
                        name: 'Week',
                        nameLocation : 'end',
                        nameGap:2,
                        data: props.weekcumulative,
                        axisPointer: {
                            type: 'shadow'
                        }
                        }
                    ],
                    yAxis: [
                        {
                        type: 'value',
                        name: 'HC',
                        nameLocation : 'start',
                        nameGap:10,
                        min: 0,
                        axisLabel: {
                            formatter: '{value}'
                        }
                        }
                    ],
                    dataZoom: [
                        {
                          type: 'inside',
                          start: 0,
                          end: 22
                        },
                        {
                          start: 0,
                          end: 22
                        }
                      ],
                    series: [
                        {
                        name: 'Cumulative Supply Internal',
                        type: 'bar',
                        stack: 'total',
                        tooltip: {
                            valueFormatter: function (value) {
                            return value + 'HC';
                            }
                        },
                        itemStyle: {
                            color: '#219557'
                        },
                        data: props.cumulativeSupplyinternal
                        },
                        {
                        name: 'Cumulative Supply External',
                        type: 'bar',
                        stack: 'total',
                        tooltip: {
                            valueFormatter: function (value) {
                            return value + 'HC';
                            }
                        },
                        itemStyle: {
                            color: '#2e908b'
                        },
                        data: props.cumulativeSupplyexternal
                        },
                        
                        {
                        name: 'Revised Demand',
                        type: 'line',
                        tooltip: {
                            valueFormatter: function (value) {
                            return value + 'HC';
                            }
                        },
                        itemStyle: {
                            color: '#9e2896'
                        },
                        data: props.cumulativeupdated
                        },
                        {
                        name: 'Projected Demand',
                        type: 'line',
                        tooltip: {
                            valueFormatter: function (value) {
                            return value + 'HC';
                            }
                        },
                        itemStyle: {
                            color: '#ed0007'
                        },
                        data: props.cumulativeOptimiser
                        }
                    ]
                    }} />
                    <table width="80%" id="overviewThree">
                        <thead><tr></tr></thead>
                        <tbody>
                        <tr>
                        {
                        props.indicatorinternal && props.indicatorinternal.map  (events => { return <td> <i class="a-icon ui-ic-dot" id={events.Overall_Performance=="Not_Ok"?"onedown":"oneup"} > </i> </td> })
                        }
                        </tr>
                        </tbody>
                    </table>

        </div>

)
}
export  default DemandSupplyGraphCumulative;