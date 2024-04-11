import React, { useEffect,useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactEcharts from 'echarts-for-react';

function GraphData (){
    
    const [selectedOption, setSelectedOption] = useState(10);
    const [selectedOptionBu, setSelectedOptionBu] = useState(5);
    const [businessUnits, setbusinessUnits] = useState(null);
    const [sectionUnits, setsectionUnitss] = useState(null);

    const [weekcumulative, setweekcumulative] = useState(null);
    const [weekinternal, setweekinternal] = useState(null);
    const [weekexternal, setweekexternal] = useState(null);
    // cumulative graph data
    const [cumulativeupdated,setcumulativeupdated]=useState(null);
    const [cumulativeOptimiser,setcumulativeOptimiser]=useState(null);
    const [cumulativeSupply,setcumulativeSupply]=useState(null);
    const [cumulativeSupplyinternal,setcumulativeSupplyinternal]=useState(null);
    const [cumulativeSupplyexternal,setcumulativeSupplyexternal]=useState(null);
    // internal graph data
    const [supplyFilledInternal, setsupplyFilledInternal] = useState(null);
    const [updatedDemandweekInternal, setupdatedDemandweekInternal] = useState(null);
    const [revisedDemandInternal, setrevisedDemandInternal] = useState(null);
    const [previousSupplyCumInternal, setpreviousSupplyCumInternal] = useState(null);
    // external graph data
    const [revisedDemandExternal, setrevisedDemandExternal] = useState(null);
    const [supplyFilledexternal, setsupplyFilledexternal] = useState(null);
    const [updatedDemandweekExternal, setupdatedDemandweekExternal] = useState(null);
    const [previousSupplyCumExternal, setpreviousSupplyCumExternal] = useState(null);
    const [indicatorinternal, setindicatorinternal] = useState(null);
    //perfomnce table
const [externalCurrentrunrate, setexternalCurrentrunrate] = useState(null);
const [externalExpectedrunrate, setexternalExpectedrunrate] = useState(null);
const [externaltimetoFulfill, setexternaltimetoFulfill] = useState(null);
const [externaltargetrunrate, setexternaltargetrunrateList] = useState(null);

const [internalCurrentrunrate, setinternalCurrentrunrate] = useState(null);
const [internalExpectedrunrate, setinternalExpectedrunrate] = useState(null);
const [internaltimetoFulfill, setinternaltimetoFulfill] = useState(null);
const [internaltargetrunrate, setinternaltargetrunrateList] = useState(null);

const [recommendations, setrecommendations] = useState(null);

useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getInternalGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setInternalGraphData(response))
.catch(error => console.log(console.error()))
},[])
        
useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getExternalGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setExternalGraphData(response))
.catch(error => console.log(console.error()))
},[])
        
useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getCumulativeGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setCumulativeGraphData(response))
.catch(error => console.log(console.error()))
},[])

useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getBusinessunits`,{
    method:'GET',
    headers:{
    'Content-Type':'application/json'
    }
})
.then(response => response.json())
.then(response => setbusinessUnits(response))
.catch(error => console.log(console.error()))
},[])

useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getSectionunits?bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
    'Content-Type':'application/json'
    }
})
.then(response => response.json())
.then(response => setsectionUnitss(response))
.catch(error => console.log(console.error()))
},[])

useEffect(() => {
    fetch(`http://localhost:8000/Optimiser/getIndicatorsSectionWiseAllWeekData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setindicatorinternal(response))
    .catch(error => console.log(console.error()))
  },[])

  
useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getRunrateDetailsSection/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => getRunrateDetails(response))
    .catch(error => console.log(console.error()))
},[])

const getRunrateDetails=response => {
    response.forEach(entry => {
      setexternalCurrentrunrate(entry.Current_Run_Rate_Externals);
      setexternalExpectedrunrate( entry.Expected_Run_Rate_Externals);
      setexternaltimetoFulfill(entry.Time_To_Fullfill_External_weeks);
      setexternaltargetrunrateList(entry.Target_Run_Rate_Externals);
      setinternalCurrentrunrate( entry.Current_Run_Rate_Internals);
      setinternalExpectedrunrate( entry.Expected_Run_Rate_Internals);
      setinternaltimetoFulfill( entry.Time_To_Fullfill_Internal_weeks);
      setrecommendations(entry.Recommendation);
      setinternaltargetrunrateList(entry.Target_run_rate_Internals);
  });
  }

    const setExternalGraphData=response => {
        let weekListExternal=[];
        let revisedDemandListExternal=[];
        let updatedDemandweekListExternal=[];
        let SuppluFilledexternalList=[];
        let previousSupplyCumExterList=[];
      response.forEach(entry => {
        weekListExternal.push(entry.week);
        SuppluFilledexternalList.push(entry.External_Fulfilled);
        revisedDemandListExternal.push(entry.Revised_External_Demand);
        updatedDemandweekListExternal.push(entry.Updated_Demand_External);
        previousSupplyCumExterList.push(entry.previouscumsupply);
      });
      setsupplyFilledexternal(SuppluFilledexternalList);
      setupdatedDemandweekExternal(updatedDemandweekListExternal);
      setrevisedDemandExternal(revisedDemandListExternal);
      setweekexternal(weekListExternal);
      setpreviousSupplyCumExternal(previousSupplyCumExterList);
    }

    const setCumulativeGraphData=response => {
        let weekListcumulative=[];
        let cumulativeupdatedList=[];
        let cumulativeOptimiserList=[];
        let cumulativeSupplyList=[];
        let cumulativeSupplyListinternal=[];
        let cumulativeSupplyListexternal=[];
        response.forEach(entry => {
          weekListcumulative.push(entry.week);
          cumulativeupdatedList.push(entry.Cum_Updated_Demand);
          cumulativeOptimiserList.push(entry.Cum_Revised_Demand);
          cumulativeSupplyList.push(entry.Cum_Supply_Fulfilled);
          cumulativeSupplyListinternal.push(entry.Internal_FulfilledCumulative);
          cumulativeSupplyListexternal.push(entry.External_FulfilledCumulative);
        });
        // graph one
        setweekcumulative(weekListcumulative);
      setcumulativeupdated(cumulativeupdatedList);
      setcumulativeOptimiser(cumulativeOptimiserList);
      setcumulativeSupply(cumulativeSupplyList);
      setcumulativeSupplyinternal(cumulativeSupplyListinternal);
      setcumulativeSupplyexternal(cumulativeSupplyListexternal);
      }

      const setInternalGraphData=response => {
        let weekListInternal=[];
        let revisedDemandListInternal=[];
        let updatedDemandweekListInternal=[];
        let supplyFilledInternalList=[];
        let previousSupplyCumExterList=[];
        response.forEach(entry => {
          weekListInternal.push(entry.week);
          revisedDemandListInternal.push(entry.Revised_Internal_Demand);
          supplyFilledInternalList.push(entry.Internal_Fulfilled);
          updatedDemandweekListInternal.push(entry.Updated_Demand_Internal);
          previousSupplyCumExterList.push(entry.previouscumsupply);
        });
        setupdatedDemandweekInternal(updatedDemandweekListInternal);
        setrevisedDemandInternal(revisedDemandListInternal);
        setsupplyFilledInternal(supplyFilledInternalList);
        setweekinternal(weekListInternal);
        setpreviousSupplyCumInternal(previousSupplyCumExterList);
      }

      const setSelectedOptionBuFunction = values => {
        setSelectedOptionBu(values);
        console.log("values"+values);
        fetch(`http://localhost:8000/Optimiser/getSectionunits?bu=${values}`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then(response => response.json())
        .then(response => setsectionUnitss(response))
        .catch(error => console.log(console.error()))
      }

      const getGraphSection=async () => {
        fetch(`http://localhost:8000/Optimiser/getInternalGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
            })
            .then(response => response.json())
            .then(response => setInternalGraphData(response))
            .catch(error => console.log(console.error()))
        
        fetch(`http://localhost:8000/Optimiser/getExternalGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
        })
        .then(response => response.json())
        .then(response => setExternalGraphData(response))
        .catch(error => console.log(console.error()))

    fetch(`http://localhost:8000/Optimiser/getCumulativeGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
      })
      .then(response => response.json())
      .then(response => setCumulativeGraphData(response))
      .catch(error => console.log(console.error()))

      fetch(`http://localhost:8000/Optimiser/getIndicatorsSectionWiseAllWeekData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      })
      .then(response => response.json())
      .then(response => setindicatorinternal(response))
      .catch(error => console.log(console.error()))

      
    fetch(`http://localhost:8000/Optimiser/getRunrateDetailsSection/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => getRunrateDetails(response))
    .catch(error => console.log(console.error()))
    
      }

      


    return ( 
            <div>
    <Row>
    <Col  xs={7}> </Col>
             
                  <Col  xs={2}>
                        <div class="a-dropdown">
                        <label for="3">Business Units</label>
                        <select onChange={e => setSelectedOptionBuFunction(e.target.value)} >
                        {
                                        businessUnits && businessUnits.map 
                                        ( 
                                            bu => {
                                            return  <option value={bu.bu_id}>{bu.bu_name}</option>
                                                }
                                        )
                        }
                        </select>
                        </div>
                  </Col>
                  <Col  xs={2}>
                        <div class="a-dropdown">
                        <label for="3">Section</label>
                        <select id="sectionDropdown"   value={selectedOption} onChange={e => setSelectedOption(e.target.value)} >
                        {
                                        sectionUnits && sectionUnits.map 
                                        ( 
                                            bu => {
                                            return  <option value={bu.sector_id}>{bu.sector_name}</option>
                                                }
                                        )
                        }
                        </select>
                        </div>
                  </Col>
                  <Col xs={1}> 
                    <button type="button" class="a-button a-button--primary -without-icon" onClick={ ()=> getGraphSection() }>
                        <div class="a-button__label">Submit</div>
                    </button>
                  </Col>
              </Row>



        <Row>
              <Col xs={4}>
<p> Cumulative Demand vs Supply  </p>
<ReactEcharts  option={{
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['Cumulative Supply', 'Current Demand', 'Optimiser Demand']
    
  },
  xAxis: [
    {
      type: 'category',
      name: 'Week',
      data: weekcumulative,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Hc',
      min: 0,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: 'Cumulative Supply Internal',
      type: 'bar',
      stack: 'total',
      tooltip: {
        valueFormatter: function (value) {
          return value + 'Hc';
        }
      },
      itemStyle: {
        color: '#219557'
      },
      data: cumulativeSupplyinternal
    },
    {
      name: 'Cumulative Supply External',
      type: 'bar',
      stack: 'total',
      tooltip: {
        valueFormatter: function (value) {
          return value + 'Hc';
        }
      },
      itemStyle: {
        color: '#2e908b'
      },
      data: cumulativeSupplyexternal
    },
    
    {
      name: 'Current Demand',
      type: 'line',
      tooltip: {
        valueFormatter: function (value) {
          return value + 'Hc';
        }
      },
      itemStyle: {
        color: '#9e2896'
      },
      data: cumulativeupdated
    },
    {
      name: 'Optimiser Demand',
      type: 'line',
      tooltip: {
        valueFormatter: function (value) {
          return value + 'Hc';
        }
      },
      itemStyle: {
        color: '#ed0007'
      },
      data: cumulativeOptimiser
    }
  ]
}} />

<table width="80%" id="overviewThree">
<thead><tr></tr></thead>
<tbody>

  <tr>
{
indicatorinternal && indicatorinternal.map  (events => { return <td> <i class="a-icon ui-ic-dot" id={events.Overall_Performance=="Not_Ok"?"onedown":"oneup"} > </i> </td> })
}
</tr>

</tbody>
</table>
</Col>


              <Col xs={4}>
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
      }
    },
    legend: {
      data: ['Internal Supply', 'Current Demand', 'Optimiser Demand']
    },
    xAxis: [
      {
        type: 'category',
        name: 'Week',
        data: weekinternal,
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Hc',
        min: 0,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
    
      {
        name: 'Internal Supply Cumulative',
        type: 'bar',
        stack: 'totalinternal',
        tooltip: {
          valueFormatter: function (value) {
            return value + 'Hc';
          }
        },
        itemStyle: {
          color: '#219557'
        },
        data: previousSupplyCumInternal
      },
      {
        name: 'Internal Supply Week',
        type: 'bar',
        stack: 'totalinternal',
        tooltip: {
          valueFormatter: function (value) {
            return value + 'Hc';
          }
        },
        itemStyle: {
          color: '#86d7a2'
        },
        data: supplyFilledInternal
      },
      {
        name: 'Current Demand',
        type: 'line',
        tooltip: {
          valueFormatter: function (value) {
            return value + 'Hc';
          }
        },
        itemStyle: {
          color: '#9e2896'
        },
        data: updatedDemandweekInternal
      },
      {
        name: 'Optimiser Demand',
        type: 'line',
        tooltip: {
          valueFormatter: function (value) {
            return value + 'Hc';
          }
        },
        itemStyle: {
          color: '#ed0007'
        },
        data: revisedDemandInternal
      }
    ]
  }
} />

<table width="80%" id="overviewThree">
<thead><tr></tr></thead>
<tbody>

  <tr>
{
indicatorinternal && indicatorinternal.map  (events => { return <td> <i class="a-icon ui-ic-dot" id={events.performance_lateral=="Not_Ok"?"onedown":"oneup"} > </i> </td> })
}
</tr>

</tbody>
</table>
</Col>


<Col xs={4}>
<p> External Demand vs Supply </p>
<ReactEcharts option={ {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['External Supply', 'Current Demand', 'Optimiser Demand']
    },
    xAxis: [
      {
        type: 'category',
        name: 'Week',
        data: weekexternal,
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Hc',
        min: 0,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
     
      {
        name: 'External Supply',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + 'Hc';
          }
        },
        stack: 'totalexternal',
        itemStyle: {
          color: '#2e908b'
        },
        data: previousSupplyCumExternal
      },
      {
        name: 'External Supply',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + 'Hc';
          }
        },
        stack: 'totalexternal',
        itemStyle: {
          color: '#a1dfdb'
        },
        data: supplyFilledexternal
      },
      {
        name: 'Current Demand',
        type: 'line',
        tooltip: {
          valueFormatter: function (value) {
            return value + 'Hc';
          }
        },
        itemStyle: {
          color: '#9e2896'
        },
        data: updatedDemandweekExternal
      },
      {
        name: 'Optimiser Demand',
        type: 'line',
        tooltip: {
          valueFormatter: function (value) {
            return value + 'Hc';
          }
        },
        itemStyle: {
          color: '#ed0007'
        },
        data: revisedDemandExternal
      }
    ]
  }} />
<table  width="80%" id="overviewThree">
<thead><tr></tr></thead>
<tbody>

  <tr>
{
indicatorinternal && indicatorinternal.map  (events => { return <td> <i class="a-icon ui-ic-dot" id={events.performance_external=="Not_Ok"?"onedown":"oneup"} > </i> </td>  })
}
</tr>
</tbody>
</table>
</Col>
</Row>

<Row>
        <Col xs={4}> 
            <p id="overviewperfomanceOne">Recommendation </p>
            <table class="m-table" id="overviewperfomance">
                <thead>
                </thead>
                <tbody>
                <tr><td>{recommendations}</td></tr>
                </tbody>
            </table>
        </Col>  
        <Col xs={4}>
            <p id="overviewperfomanceOne">Internal Hiring Perfomance </p>
            <table class="m-table" id="overviewperfomance">
                <thead>
                </thead>
                <tbody>
                <tr >
                <tr> <td id="overviewtable">Target Hiring Rate</td><td id="overviewtableint" >{internaltargetrunrate}</td>
                <td id="overviewtable">Current Hiring Rate</td><td id="overviewtableint" >{internalCurrentrunrate}</td>
                </tr>

                <tr> <td id="overviewtable">Required Hiring Rate</td><td id="overviewtableint">{internalExpectedrunrate}</td>
                <td id="overviewtable">Time to fullfill (weeks)</td><td id="overviewtableint" >{internaltimetoFulfill}</td>
                </tr>
                </tr>
                
                </tbody>
            </table>
        </Col>  
        <Col xs={4}> 
            <p id="overviewperfomanceOne">External Hiring Perfomance </p>
            <table >
            <thead>
            </thead>
            <tbody>
            <tr class="m-table" id="overviewperfomance">
                <tr> <td id="overviewtable">Target Hiring Rate</td><td id="overviewtableint">{externaltargetrunrate}</td>
                <td id="overviewtable">Current Hiring Rate</td><td id="overviewtableint">{externalCurrentrunrate}</td></tr>

                <tr><td id="overviewtable">Required Hiring Rate</td><td id="overviewtableint">{externalExpectedrunrate}</td>
                <td id="overviewtable">Time to fullfill (weeks)</td><td id="overviewtableint">{externaltimetoFulfill}</td></tr>
                </tr> 
                </tbody>
            </table>  
        </Col> 
</Row>
            </div>
              )
    }
    export  default GraphData;