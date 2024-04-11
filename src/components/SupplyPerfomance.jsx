import React, { useEffect,useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactEcharts from 'echarts-for-react';
function SupplyPerfomance (props){


return ( <div>
<br/>
<Row>
<table class="m-table" >
  <thead>
    <th></th>
    <th>Revised Demand</th>
    <th>Demand Fullfilled</th>
     </thead>
  <tbody>
    <tr>
      <td>Overall</td>
      <td>{props.totaldemandnumber}</td>
      <td>{props.totalSupplynumber}</td>
    </tr>
    <tr>
      <td>External</td>
      <td>{props.totaldemandnumberExternal}</td>
      <td>{props.totalSupplynumberExternal}</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>{props.totaldemandnumberInternal}</td>
      <td>{props.totalSupplynumberInternal}</td>
    </tr>
  </tbody>
</table>
<Col xs={4}>
  <br/>
<p>Overall  </p>
<ReactEcharts  style={{height: "130px"}} option={ {
  series: [
    {
      type: 'gauge',
      center: ['50%', '50%'],
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.5, '#ed0007'],
            [0.9, '#ffdf95'],
            [1, '#00884a']
          ]
        }
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 10,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: false,
      splitLine: false,
      axisLabel: {
        color: '#464646',
        fontSize: 2,
        distance: -60,
        formatter: function (value) {
          if (value === 0.875) {
            return 'A';
          } else if (value === 0.625) {
            return 'B';
          } else if (value === 0.375) {
            return 'C';
          } else if (value === 0.125) {
            return 'D';
          }
          return '';
        }
      },
      title: {
        offsetCenter: [0, '-20%'],
        fontSize: 15
      },
      detail: {
        fontSize: 15,
        offsetCenter: [0, '0%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + '%';
        },
        color: 'auto'
      },
      data: [
        {
          value:props.total
        }
      ]
    }
  ]
}} /> 

</Col>
<Col xs={4}>
<br/>
                        <p>External </p>
                        <ReactEcharts  style={{height: "130px"}} option={ {
  series: [
    {
      type: 'gauge',
      center: ['50%', '50%'],
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.5, '#ed0007'],
            [0.9, '#ffdf95'],
            [1, '#00884a']
          ]
        }
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 10,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: false,
      splitLine: false,
      axisLabel: {
        color: '#464646',
        fontSize: 2,
        distance: -60,
        formatter: function (value) {
          if (value === 0.875) {
            return 'A';
          } else if (value === 0.625) {
            return 'B';
          } else if (value === 0.375) {
            return 'C';
          } else if (value === 0.125) {
            return 'D';
          }
          return '';
        }
      },
      title: {
        offsetCenter: [0, '-20%'],
        fontSize: 30
      },
      detail: {
        fontSize: 15,
        offsetCenter: [0, '0%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + '%';
        },
        color: 'auto'
      },
      data: [
        {
          value:props.external
        }
      ]
    }
  ]
}} /> 
</Col>
<Col xs={4}>        
<br/>          
                        <p>Internal </p>
                        <ReactEcharts style={{height: "130px"}} option={ {
  series: [
    {
      type: 'gauge',
      center: ['50%', '50%'],
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.5, '#ed0007'],
            [0.9, '#ffdf95'],
            [1, '#00884a']
          ]
        }
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' Hc';
        }
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 10,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: false,
      splitLine: false,
      axisLabel: {
        color: '#464646',
        fontSize: 2,
        distance: -60,
        formatter: function (value) {
          if (value === 0.875) {
            return 'A';
          } else if (value === 0.625) {
            return 'B';
          } else if (value === 0.375) {
            return 'C';
          } else if (value === 0.125) {
            return 'D';
          }
          return '';
        }
      },
      title: {
        offsetCenter: [0, '-20%'],
        fontSize: 30
      },
      detail: {
        fontSize: 15,
        offsetCenter: [0, '0%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + '%';
        },
        color: 'auto'
      },
      data: [
        {
          value: props.internal
        }
      ]
    }
  ]
}} /> 
</Col>


                        </Row>
            </div>
            )
        }
        export  default SupplyPerfomance;
