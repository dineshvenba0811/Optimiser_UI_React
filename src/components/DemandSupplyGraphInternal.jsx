import React from "react";
import ReactEcharts from 'echarts-for-react';

function DemandSupplyGraphInternal (props){
    return (
        <div>
               <p> Internal Demand vs Supply </p>
                    <ReactEcharts option={
                    {
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
                        data: ['Cumulative Supply', 'Weekly Supply','Revised Demand','Projected Demand']
                        },
                        xAxis: [
                        {
                            type: 'category',
                            name: 'Week',
                            nameLocation : 'end',
                            nameGap:2,
                            data: props.weekinternal,
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
                            name: 'Cumulative Supply',
                            type: 'bar',
                            stack: 'totalinternal',
                            tooltip: {
                            valueFormatter: function (value) {
                                return value + 'HC';
                            }
                            },
                            itemStyle: {
                            color: '#219557'
                            },
                            data: props.previousSupplyCumInternal
                        },
                        {
                            name: 'Weekly Supply',
                            type: 'bar',
                            stack: 'totalinternal',
                            tooltip: {
                            valueFormatter: function (value) {
                                return value + 'HC';
                            }
                            },
                            itemStyle: {
                            color: '#86d7a2'
                            },
                            data: props.supplyFilledInternal
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
                            data: props.updatedDemandweekInternal
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
                            data: props.revisedDemandInternal
                        }
                        ]
                    }
                    } />
                    <table width="80%" id="overviewThree">
                        <thead><tr></tr></thead>
                        <tbody>
                        <tr>
                        {
                        props.indicatorinternal && props.indicatorinternal.map  (events => { return <td> <i class="a-icon ui-ic-dot" id={events.performance_lateral=="Not_Ok"?"onedown":"oneup"} > </i> </td> })
                        }
                        </tr>
                        </tbody>
                    </table>
        </div>

)
}
export  default DemandSupplyGraphInternal;