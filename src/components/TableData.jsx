import React, { useEffect,useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactEcharts from 'echarts-for-react';
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery'; 

function TableData (){
const [selectedOption, setSelectedOption] = useState(10);
const [selectedOptionBu, setSelectedOptionBu] = useState(5);

    const [businessUnits, setbusinessUnits] = useState(null);
    const [sectionUnits, setsectionUnitss] = useState(null);


     // status overview fields
const [overviewHeadCount, setoverviewHeadCount] = useState(null);
const [overviewAttrition, setoverviewAttrition] = useState(null);
const [attritionForecast, setattritionForecast] = useState(null);

const [overviewTpb, setoverviewTpb] = useState(null);
const [overviewRevisedDemand, setoverviewRevisedDemand] = useState(null);

const [freshers, setfreshers] = useState(0);
// quaterly table data
const [quarterlyData, setquarterlyData] = useState(null);
// yearly Data table
const [tbpheadcountyearly, settbpheadcountyearly] = useState(null);
const [updatedDemandyearly, setupdatedDemandyearly] = useState(null);
const [demandfullfilledyearly, setdemandfullfilledyearly] = useState(null);
const [opendemandyearly, setopendemandyearly] = useState(null);
const [reviseddemandyearly, setreviseddemandyearly] = useState(null);

// attrition expand data
const [attritionData, setattritionData] = useState(null);
// graph two speedometer values
const [percentageTotalSupply, setpercentageTotalSupply] = useState(null);
const [totalSupplynumber, settotalSupplynumber] = useState(null);
const [totaldemandnumber, settotaldemandnumber] = useState(null);
const [percentageTotalSupplyInternal, setpercentageTotalSupplyInternal] = useState(null);
const [totalSupplynumberInternal, settotalSupplynumberInternal] = useState(null);
const [totaldemandnumberInternal, settotaldemandnumberInternal] = useState(null);
const [percentageTotalSupplyExternal, setpercentageTotalSupplyExternal] = useState(null);
const [totalSupplynumberExternal, settotalSupplynumberExternal] = useState(null);
const [totaldemandnumberExternal, settotaldemandnumberExternal] = useState(null);
const [loading, setLoading] = useState(false);


const getattritionSection = () => {
    setShowTwo(true);
  }
  const [showTwo, setShowTwo] = useState(false);
  const handleCloseTwo = () => setShowTwo(false);

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
fetch(`http://localhost:8000/Optimiser/getQuarterlyData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setquarterlyData(response))
    .catch(error => console.log(console.error()))
},[])

useEffect(() => {
  fetch(`http://localhost:8000/Optimiser/getQuarterlyData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
      })
      .then(response => response.json())
      .then(response => setquarterlyData(response))
      .catch(error => console.log(console.error()))
  },[])

useEffect(() => {
    fetch(`http://localhost:8000/Optimiser/getYearlyDataTable/?section=${selectedOption}&bu=${selectedOptionBu}`,{
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
      })
      .then(response => response.json())
      .then(response => getYearlyDataTableMethod(response))
      .catch(error => console.log(console.error()))
    },[])

useEffect(() => {
    fetch(`http://localhost:8000/Optimiser/getAttritionDetails/?section=${selectedOption}&bu=${selectedOptionBu}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
        })
        .then(response => response.json())
        .then(response => setattritionData(response))
        .catch(error => console.log(console.error()))
    },[])
useEffect(() => {
    fetch(`http://localhost:8000/Optimiser/getYearlyData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
        })
        .then(response => response.json())
        .then(response => setYearlyData(response))
        .catch(error => console.log(console.error()))
    },[])

useEffect(() => {
    fetch(`http://localhost:8000/Optimiser/getYearlyDataTotalExternal/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setYearlyDataTotalExternal(response))
    .catch(error => console.log(console.error()))
    },[])

useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getYearlyDataTotalInternal/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setYearlyDataTotalInternal(response))
    .catch(error => console.log(console.error()))
},[])
useEffect(() => {
    fetch(`http://localhost:8000/Optimiser/getSectionWiseHeadCountStatus/?section=${selectedOption}&bu=${selectedOptionBu}`,{
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
      })
      .then(response => response.json())
      .then(response => setOverviewHeadCount(response))
      .catch(error => console.log(console.error()))
    },[])
useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getSectionWiseAttritionForecase/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setattritionForecastMethod(response))
.catch(error => console.log(console.error()))
},[])
    
useEffect(() => {
fetch(`http://localhost:8000/Optimiser/getOverviewTBP/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => getOverviewTBPMethod(response))
.catch(error => console.log(console.error()))
},[])

const getYearlyDataTableMethod=response => {
  response.forEach(entry => {
    settbpheadcountyearly(entry.Total_Planned_Demand);
    setupdatedDemandyearly(entry.cdi);
    setdemandfullfilledyearly(entry.totalsupply);
    setopendemandyearly(entry.current_Demand_total);
    setreviseddemandyearly(entry.revised);
  });
}

const setYearlyData=response => {
    response.forEach(entry => {
      setpercentageTotalSupply(entry.percentage);
      settotalSupplynumber(entry.totalS);
      settotaldemandnumber(entry.totalD);
    });
  }
  const setYearlyDataTotalExternal=response => {
    response.forEach(entry => {
      setpercentageTotalSupplyExternal(entry.percentageE);
      settotalSupplynumberExternal(entry.totalSE);
      settotaldemandnumberExternal(entry.totalDE);
    });
  }
  const setYearlyDataTotalInternal=response => {
    response.forEach(entry => {
      setpercentageTotalSupplyInternal(entry.percentageI);
      settotalSupplynumberInternal(entry.totalSI);
      settotaldemandnumberInternal(entry.totalDI);
    });
  }
const setattritionForecastMethod=response => {
    response.forEach(entry => {
      setattritionForecast(entry.attr_Annualized_percentage);
    });
  }
  const setOverviewHeadCount=response => {
    response.forEach(entry => {
  setoverviewHeadCount(entry.Current_Headcount);
  setoverviewAttrition(entry.Total_Actual_Attrition);
  });
  }
  const getOverviewTBPMethod=response => {
    response.forEach(entry => {
      setoverviewTpb(entry.tbp);
  });
  }
const getGraphSection=async () => {

  $("#overlay").fadeIn();
  setLoading(true);

  fetch(`http://localhost:8000/Optimiser/getYearlyDataTable/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => getYearlyDataTableMethod(response))
    .catch(error => console.log(console.error()))

  fetch(`http://localhost:8000/Optimiser/getOverviewTBP/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => getOverviewTBPMethod(response))
.catch(error => console.log(console.error()))

fetch(`http://localhost:8000/Optimiser/getQuarterlyData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setquarterlyData(response))
    .catch(error => console.log(console.error()))



fetch(`http://localhost:8000/Optimiser/getYearlyData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setYearlyData(response))
    .catch(error => console.log(console.error()))

fetch(`http://localhost:8000/Optimiser/getYearlyDataTotalExternal/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setYearlyDataTotalExternal(response))
.catch(error => console.log(console.error()))

fetch(`http://localhost:8000/Optimiser/getYearlyDataTotalInternal/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setYearlyDataTotalInternal(response))
.catch(error => console.log(console.error()))

fetch(`http://localhost:8000/Optimiser/getSectionWiseAttritionForecase/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setattritionForecastMethod(response))
    .catch(error => console.log(console.error()))

fetch(`http://localhost:8000/Optimiser/getSectionWiseHeadCountStatus/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setOverviewHeadCount(response))
    .catch(error => console.log(console.error()))

    $("#overlay").fadeOut();

  }

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth();
let year = newDate.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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
 

    return ( 
            <div>
              

<br/>
  <Row> 
              <Col  xs={3}>  <p id="dateorder"> {date} {monthNames[month]}  {year} ,You are in CW13 </p> </Col>
              <Col  xs={3}></Col>
                    <Col xs={6}>
                            <table class="m-table"  id="overviewquarter">
                            <tr>    <td> Current HC : {overviewHeadCount} </td>
                            <td> Buffer : 0</td>
                            <td> Attrition : {overviewAttrition} <i class="a-icon ui-ic-inline-externallink" onClick={ ()=> getattritionSection() }></i> </td>
                            <td> Attrition Forecast :{attritionForecast}% </td>
                            </tr>
                            </table>
                    </Col>
                    </Row>
              
                  <Row> 
                  <Col xs={2}>
                  
                  
                   <table class="m-table" >
                    <thead>
                     <th>Description</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td id="firsttable">TBP HC# </td>
                      </tr>
                      <tr>
                        <td id="firsttable">Revised Demand</td>
                      </tr>
                      <tr>
                        <td id="firsttable">Demand Fulfilled</td>
                      </tr>
                      <tr>
                        <td id="firsttable">Supply Pipeline</td>
                      </tr>
                      <tr>
                        <td id="firsttable">Projected Demand</td>
                      </tr>
                      <tr>
                        <td id="firsttable">Demand UnFullfilled</td>
                      </tr>
                    </tbody>
                  </table> 
                </Col>
                    <Col xs={7}>
                      <table class="m-table"  >
                        <thead>
                        
                            <tr>
                             
                                <th >2022</th>
                                <th>Q 1</th>
                                <th>Q 2</th>
                                <th>Q 3</th>
                                <th>Q 4</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {/* <tr>
                        <td id="firsttable">TBP HC# </td>
                      </tr>
                      <tr>
                        <td id="firsttable">Updated Demand</td>
                      </tr>
                      <tr>
                        <td id="firsttable">Demand Fulfilled</td>
                      </tr>
                      <tr>
                        <td id="firsttable">Demand UnFullfilled</td>
                      </tr>
                      <tr>
                        <td id="firsttable">Projected Demand</td>
                      </tr> */}
                        {
                               quarterlyData && quarterlyData.map 
                            ( (events, index) => {
                                console.log(index);
                                return <tr key={events.quarter}>  
                                <td> {events.Quarter0}  </td>
                                <td> {events.Quarter1} </td>
                                <td> {events.Quarter2} </td>
                                <td> {events.Quarter3} </td>
                                <td> {events.Quarter4} </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </Col>
               
               <Col xs={3}> 
               <Row>
               <p>Overall Supply Perfomance </p>
               <ReactEcharts  style={{height: "150px"}} option={ {
  series: [
    {
      type: 'gauge',
      center: ['50%', '85%'],
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
          value:percentageTotalSupply
        }
      ]
    }
  ]
}} /> 
 </Row>
 <Row>
 <Col xs={6}> 
                        <p>External </p>
                        <ReactEcharts  style={{height: "100px"}} option={ {
  series: [
    {
      type: 'gauge',
      center: ['50%', '38%'],
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
          value:percentageTotalSupplyExternal
        }
      ]
    }
  ]
}} />  </Col>
<Col xs={6}> 
                        <p>Internal </p>
                        <ReactEcharts style={{height: "100px"}} option={ {
  series: [
    {
      type: 'gauge',
      center: ['50%', '38%'],
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
          value: percentageTotalSupplyInternal
        }
      ]
    }
  ]
}} /> 
</Col>
                        </Row>
 </Col>
               
                  </Row>
              <Modal show={showTwo} onHide={handleCloseTwo}>
          <Modal.Header closeButton>
            <Modal.Title>Attrition Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <div>

        <table class="m-table" >
                        <thead>
                            <tr>
                                <th>Total_Actual_Attrition</th>
                                <th>Attrition Month</th>
                                <th>Attrition Type</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                               attritionData && attritionData.map 
                            ( events => {
                                return <tr>  
                                   <td> {events.attremp} </td>
                                   <td> {events.attr_Month} </td>
                                 <td> {events.attr_Type}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
        
                    </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

        <div id="overlay" style={{display: "none"}} >
		<div class="spinner"></div>
		<div class="a-activity-indicator" >
<div class="a-activity-indicator__top-box"></div>
<div class="a-activity-indicator__bottom-box"></div>
</div>
	</div>
            </div>
            )
        }
        export  default TableData;
