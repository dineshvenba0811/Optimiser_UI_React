import React from "react";
import ReactEcharts from 'echarts-for-react';

function DemandSupplyGraphExternal(props){
    return (
        <div>
            <p> External Demand vs Supply </p>
                <ReactEcharts option={ {
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
                        data: ['Cumulative Supply','Weekly Supply', 'Revised Demand', 'Projected Demand']
                        },
                        xAxis: [
                        {
                            type: 'category',
                            name: 'Week',
                            nameLocation : 'end',
                            nameGap:2,
                            data: props.weekexternal,
                            axisPointer: {
                            type: 'shadow'
                            }
                        }
                        ],
                        yAxis: [
                        {
                            type: 'value',
                            name: 'HC',
                            min: 0,
                            nameLocation : 'start',
                            nameGap:10,
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
                            tooltip: {
                            valueFormatter: function (value) {
                                return value + 'HC';
                            }
                            },
                            stack: 'totalexternal',
                            itemStyle: {
                            color: '#2e908b'
                            },
                            data: props.previousSupplyCumExternal
                        },
                        {
                            name: 'Weekly Supply',
                            type: 'bar',
                            tooltip: {
                            valueFormatter: function (value) {
                                return value + 'HC';
                            }
                            },
                            stack: 'totalexternal',
                            itemStyle: {
                            color: '#a1dfdb'
                            },
                            data: props.supplyFilledexternal
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
                            data: props.updatedDemandweekExternal
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
                            data: props.revisedDemandExternal
                        }
                        ]
                    }} />

                    <table  width="80%" id="overviewThree">
                        <thead><tr></tr></thead>
                        <tbody>
                        <tr>
                        {
                        props.indicatorinternal && props.indicatorinternal.map  (events => { return <td> <i class="a-icon ui-ic-dot" id={events.performance_external=="Not_Ok"?"onedown":"oneup"} > </i> </td>  })
                        }
                        </tr>
                        </tbody>
                    </table>
        </div>

)
}
export  default DemandSupplyGraphExternal;