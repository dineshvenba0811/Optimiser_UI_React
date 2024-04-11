import React, { useEffect,useState } from "react";
import SectionData from './SectionData';
import SectionDataQuarter from './SectionDataQuarter';
import ReactEcharts from 'echarts-for-react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import $ from 'jquery'; 

function BusinessUnits (){

  

  let section=10;
  const [showTwo, setShowTwo] = useState(false);
  const handleCloseTwo = () => setShowTwo(false);
  // cumulative graph 
  const [showThree, setshowThree] = useState(false);
  const handleCloseThree = () => setshowThree(false);

  
 
// week common data
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
// quaterly table data
const [quarterlyData, setquarterlyData] = useState(null);
// attrition expand data
const [attritionData, setattritionData] = useState(null);

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
const [indicatorinternal, setindicatorinternal] = useState(null);

const [loading, setLoading] = useState(false);
const [selectedOption, setSelectedOption] = useState(10);
const [selectedOptionBu, setSelectedOptionBu] = useState(5);

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





      // useEffect(() => {
      //   fetch(`http://localhost:8000/Optimiser/getSectionWiseHeadCountStatus/?section=${selectedOption}&bu=${selectedOptionBu}`,{
      //     method:'GET',
      //     headers:{
      //         'Content-Type':'application/json'
      //     }
      //     })
      //     .then(response => response.json())
      //     //.then(response => setOverviewHeadCount(response))
      //     .catch(error => console.log(console.error()))
      //   },[])

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

  // useEffect(() => {
  // fetch(`http://localhost:8000/Optimiser/getSectionWiseHeadCountStatusOnlyHeadCount/?section=${selectedOption}&bu=${selectedOptionBu}`,{
  //         method:'GET',
  //         headers:{
  //             'Content-Type':'application/json'
  //         }
  //         })
  //         .then(response => response.json())
  //         .then(response => setgetSectionWiseHeadCountStatusOnlyHeadCount(response))
  //         .catch(error => console.log(console.error()))
  //       },[])

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

  useEffect(() => {
  fetch(`http://localhost:8000/Optimiser/getFreshersCount/?bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setfreshersMethod(response))
    .catch(error => console.log(console.error()))
  },[])

  const setattritionForecastMethod=response => {
    response.forEach(entry => {
      setattritionForecast(entry.attr_Annualized_percentage);
    });
  }

  const setfreshersMethod=response => {
    response.forEach(entry => {
      setfreshers(entry.Fresher_count);
    });
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
const getattritionSection = () => {
  setShowTwo(true);
}
const getcumulativeGraph = () => {
  setshowThree(true);
  // var myChart = echarts.init(document.getElementById('chartContainerTech'));
  // var option = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [
  //     {
  //       data: [150, 230, 224, 218, 135, 147, 260],
  //       type: 'line'
  //     }
  //   ]
  // };
  // myChart.setOption(option);
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



const setgetSectionWiseHeadCountStatusOnlyHeadCount=response => {
  response.forEach(entry => {
setoverviewRevisedDemand(entry.Total_Revised_Demand);
});
}
const getGraphSection=async () => {
  $("#overlay").fadeIn();
 setLoading(true);
    section=document.getElementById("sectionDropdown").value;
    console.log(" hi section val");
    console.log(selectedOption);
    if(selectedOption==10){
      alert("helo");
      setindicatorinternal(null);
    }

      fetch(`http://localhost:8000/Optimiser/getInternalGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
        })
        .then(response => response.json())
        .then(response => setInternalGraphData(response))
        .catch(error => console.log(console.error()))

        // fetch(`http://localhost:8000/Optimiser/getFreshersCount/?bu=${selectedOptionBu}`,{
        //   method:'GET',
        //   headers:{
        //       'Content-Type':'application/json'
        //   }
        //   })
        //   .then(response => response.json())
        //   .then(response => setfreshersMethod(response))
        //   .catch(error => console.log(console.error()))

          fetch(`http://localhost:8000/Optimiser/getOverviewTBP/?section=${selectedOption}&bu=${selectedOptionBu}`,{
          method:'GET',
          headers:{
              'Content-Type':'application/json'
          }
          })
          .then(response => response.json())
          .then(response => getOverviewTBPMethod(response))
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

      
     

      fetch(`http://localhost:8000/Optimiser/getSectionWiseHeadCountStatus/?section=${selectedOption}&bu=${selectedOptionBu}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
        })
        .then(response => response.json())
        .then(response => setOverviewHeadCount(response))
        .catch(error => console.log(console.error()))

      

      
        // fetch(`http://localhost:8000/Optimiser/getSectionWiseHeadCountStatusOnlyHeadCount/?section=${selectedOption}&bu=${selectedOptionBu}`,{
        //   method:'GET',
        //   headers:{
        //       'Content-Type':'application/json'
        //   }
        //   })
        //   .then(response => response.json())
        //   .then(response => setgetSectionWiseHeadCountStatusOnlyHeadCount(response))
        //   .catch(error => console.log(console.error()))

        


        fetch(`http://localhost:8000/Optimiser/getQuarterlyData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
        })
        .then(response => response.json())
        .then(response => setquarterlyData(response))
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

         


            fetch(`http://localhost:8000/Optimiser/getIndicatorsSectionWiseAllWeekData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
              method:'GET',
              headers:{
                'Content-Type':'application/json'
              }
            })
            .then(response => response.json())
            .then(response => setindicatorinternal(response))
            .catch(error => console.log(console.error()))

            fetch(`http://localhost:8000/Optimiser/getAttritionDetails/?section=${selectedOption}&bu=${selectedOptionBu}`,{
              method:'GET',
              headers:{
                  'Content-Type':'application/json'
              }
              })
              .then(response => response.json())
              .then(response => setattritionData(response))
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
                <Row>
                <Col  xs={2}> {date} {monthNames[month]}  {year} ,You are in CW13 </Col>
                <Col  xs={4}>   </Col>
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
              <hr/>
              <Row>
                   
                    {/* <Col xs={2}>
                    <p> Status Overview </p>
                    <table class="m-table" id="overviewStatus">
                        <thead>
                        </thead>
                        <tbody>
                          <tr><td id="overviewStatusOne">Current HC</td><td id="overviewStatusTwo">{overviewHeadCount}</td></tr>
                          <tr><td id="overviewStatusOne">TBP</td><td id="overviewStatusTwo">{overviewTpb}</td></tr>
                          <tr><td id="overviewStatusOne">Optimiser Demand</td><td id="overviewStatusTwo">{overviewRevisedDemand}</td></tr>
                          <tr><td id="overviewStatusOne" >Buffer</td><td id="overviewStatusTwo">0</td></tr>
                          <tr><td id="overviewStatusOne" >Attrition  <i class="a-icon ui-ic-inline-externallink" onClick={ ()=> getattritionSection() }>
                        
                        </i> </td><td>{overviewAttrition}</td></tr>
                        </tbody>
                    </table>
                    </Col> */}
                    {/* <Col xs={2}>
                    <table class="m-table" id="overview">
                        <thead>
                           <th>Turn over Info</th>
                           <th></th>
                        </thead>
                        <tbody>
                       
                        
                        </tbody>
                    </table>
                    </Col> */}
                    <Col xs={6} id="quarterlydata">
                      <Row> 
                      <Col xs={12}>
                        <table class="m-table"  id="overviewquarter">
                      <tr>    <td> Current HC : {overviewHeadCount} </td>
                      <td> TBP # : {overviewTpb} </td> 
                          <td> Buffer : 0</td>
                          <td> Attrition : {overviewAttrition} <i class="a-icon ui-ic-inline-externallink" onClick={ ()=> getattritionSection() }></i> </td>
                          <td> Attrition Forecast :{attritionForecast}% </td>
                          
                          </tr>
                        </table>
                        </Col>
                        </Row>

                        <Row> 
                        <Col xs={12}>
                    <p> Quarterly Demand Supply </p>
                      <table class="m-table"  >
                        <thead>
                        
                            <tr>
                            <th id="overviewStatusOne">Quarter</th>
                                <th id="overviewStatusOne">TBP Demand</th>
                                <th id="overviewStatusOne">Updated Demand </th>
                                <th id="overviewStatusOne">Demand Fullfilled </th>
                                <th id="overviewStatusOne">Supply Pipeline </th>
                                <th id="overviewStatusOne">Open Demand</th>
                                <th id="overviewStatusOne">Optimiser Demand</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                        {
                               quarterlyData && quarterlyData.map 
                            ( events => {
                                return <tr key={events.quarter}>  
                                <td> {events.quarter} </td>
                                <td> {events.Total_Planned_Demand} </td>
                                <td> {events.cd} </td>
                                <td> {events.totalsupply} </td>
                                <td>{events.pipeline}</td>
                                <td> {events.current_Demand_total} </td>
                                <td> {events.revised} </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                    </Col>
                    </Row>
                      </Col>

                      
                      <Col xs={4} id="yearlydata"> 
                      <p> Yearly Demand Supply </p>
                      <Row>
                    <Col xs={4}> 
                      <p>Over all Supply </p>
                    <ReactEcharts style={{height: "150px"}}  option={ {
  series: [
    {
      type: 'gauge',
      center: ['60%', '48%'],
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
        width: 20,
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
        fontSize: 20,
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
 
 </Col>
 
 <Col xs={4}>
  
 <p>External Supply </p>
 <ReactEcharts style={{height: "150px"}} option={ {
  series: [
    {
      type: 'gauge',
      center: ['60%', '48%'],
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
        width: 20,
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
        fontSize: 20,
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
}} /> 
     
 </Col>
 <Col xs={4}>
 <p>Internal Supply </p>
 <ReactEcharts style={{height: "150px"}} option={ {
  series: [
    {
      type: 'gauge',
      center: ['50%', '48%'],
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
        width: 20,
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
        fontSize: 20,
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
 <table class="m-table">
   <thead>
     <tr> <th> </th>  <th>Total Demand (2022)</th> <th>Supply Till Date</th> </tr>
   </thead>
   <tbody>

<tr>
  <td>External </td>
  <td> {totaldemandnumberExternal}</td>
  <td> {totalSupplynumberExternal}</td>
  
</tr>
<tr>
  <td>Internal </td>
  
  <td> {totaldemandnumberInternal}</td>
  <td> {totalSupplynumberInternal}</td>
</tr>
<tr>
  <td>Total </td>
  <td> {totaldemandnumber}</td>
  <td> {totalSupplynumber}</td>
</tr>
   </tbody>
 </table>
 </Col>
 </Row>

                    <hr/>
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
      name: 'Current Supply',
      type: 'line',
      tooltip: {
        valueFormatter: function (value) {
          return value + 'Hc';
        }
      },
     
      data: cumulativeSupply
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
          color: '#a1dfdb'
        },
        data: supplyFilledexternal
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
          color: '#2e908b'
        },
        data: previousSupplyCumExternal
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

<hr/>

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

  {/* <p>Target Runrate :{internaltargetrunrate} </p>
  <p>Current Runrate :{internalCurrentrunrate} </p>
  <p>Required Runrate :{internalExpectedrunrate} </p>
  <p>Time to fullfill (weeks):{internaltimetoFulfill} </p> */}
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
                        {/* <table  id="overviewperfomanceOneTwo">
                            <thead>
                            </thead>
                            <tbody>
                              <tr><td>External :Target Runrate</td><td>{externaltargetrunrate}</td>
                              <td>Current Runrate</td><td>{externalCurrentrunrate}</td>
                              <td>Required Runrate</td><td>{externalExpectedrunrate}</td>
                              <td>Time to fullfill (weeks)</td><td>{externaltimetoFulfill}</td></tr>
                            </tbody>
                        </table> */}
               
                     
                    </Row>

<Modal show={showTwo} onHide={handleCloseTwo}>
          <Modal.Header closeButton>
            <Modal.Title>Attrition Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <div>

        <table class="m-table" id="overviewtwo">
                        <thead>
                            <tr>
                            <th>Section</th>
                                <th>Total_Actual_Attrition</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                               attritionData && attritionData.map 
                            ( events => {
                                return <tr>  
                                   <td> {events.sector_name} </td>
                                 <td> {events.Total_Actual_Attrition}</td>
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

        <Modal show={showThree} onHide={handleCloseThree}>
          <Modal.Header closeButton>
            <Modal.Title>Attrition Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <div id="chartContainerTech">
       
       
       
        
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
        
                    {/* <Col xs={2}>
                        <table class="m-table" id="overview">
                            <thead>
                              <tr>Recommendations</tr>
                            </thead>
                            <tbody>
                              <tr><td></td></tr>
                            </tbody>
                        </table>
                        </Col> */}


      </div>
    )
}
export  default BusinessUnits;