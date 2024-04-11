import React, { useEffect,useState } from "react";
import logo from './logo.svg';
import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import YearlyTableData from './components/YearlyTableData';
import SupplyPerfomance from './components/SupplyPerfomance';
import DemandSupplyGraphExternal from './components/DemandSupplyGraphExternal';
import DemandSupplyGraphCumulative from './components/DemandSupplyGraphCumulative';
import DemandSupplyGraphInternal from './components/DemandSupplyGraphInternal';
import Recommendation from './components/Recommendation';
import InternalPerfomance from './components/InternalPerfomance';
import Externalperfomance from './components/Externalperfomance';
import SideTabNavigation from './components/SideTabNavigation';
import AttritionInfo from './components/AttritionInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Boschlogo from './Boschlogo.png';
import Boschrow from './Boschrow.png';
import axios from 'axios';

function App() {
  // document.getElementById("#London").style.display = "block";
  // document.getElementById("#London").className += " active";

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  const [selectedOption, setSelectedOption] = useState(10);
  const [selectedOptionBu, setSelectedOptionBu] = useState(5);
  const [businessUnits, setbusinessUnits] = useState(null);
  const [sectionUnits, setsectionUnitss] = useState(null);
  // quaterly table data
  const [quarterlyData, setquarterlyData] = useState(null);
// graph two speedometer values
const [percentageTotalSupply, setpercentageTotalSupply] = useState(null);
const [percentageTotalSupplyTwo, setpercentageTotalSupplyTwo] = useState(null);
const [totalSupplynumber, settotalSupplynumber] = useState(null);
const [totaldemandnumber, settotaldemandnumber] = useState(null);

const [percentageTotalSupplyInternal, setpercentageTotalSupplyInternal] = useState(null);
const [percentageTotalSupplyInternalTwo, setpercentageTotalSupplyInternalTwo] = useState(null);
const [totalSupplynumberInternal, settotalSupplynumberInternal] = useState(null);
const [totaldemandnumberInternal, settotaldemandnumberInternal] = useState(null);

const [percentageTotalSupplyExternal, setpercentageTotalSupplyExternal] = useState(null);
const [totalSupplynumberExternal, settotalSupplynumberExternal] = useState(null);
const [totaldemandnumberExternal, settotaldemandnumberExternal] = useState(null);
const [percentageTotalSupplyExternalTwo, setpercentageTotalSupplyExternalTwo] = useState(null);

// week data
const [weekcumulative, setweekcumulative] = useState(null);
const [weekinternal, setweekinternal] = useState(null);
const [weekexternal, setweekexternal] = useState(null);
// cumulative graph data
const [cumulativeupdated,setcumulativeupdated]=useState(null);
const [cumulativeOptimiser,setcumulativeOptimiser]=useState(null);
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
// indicator
const [indicatorinternal, setindicatorinternal] = useState(null);
 //perfomnce table - external
 const [externalCurrentrunrate, setexternalCurrentrunrate] = useState(null);
 const [externalExpectedrunrate, setexternalExpectedrunrate] = useState(null);
 const [externaltimetoFulfill, setexternaltimetoFulfill] = useState(null);
 const [externaltargetrunrate, setexternaltargetrunrateList] = useState(null);
 // internal
 const [internalCurrentrunrate, setinternalCurrentrunrate] = useState(null);
 const [internalExpectedrunrate, setinternalExpectedrunrate] = useState(null);
 const [internaltimetoFulfill, setinternaltimetoFulfill] = useState(null);
 const [internaltargetrunrate, setinternaltargetrunrateList] = useState(null);
 // recommendation
 const [recommendations, setrecommendations] = useState(null);
//     // status overview fields
const [overviewHeadCount, setoverviewHeadCount] = useState(null);
const [overviewAttrition, setoverviewAttrition] = useState(null);
const [attritionForecast, setattritionForecast] = useState(null);
// attrition expand data
const [attritionData, setattritionData] = useState(null);

// attrition section
const getattritionSection = () => {
  setShowTwo(true);
}

const [showTwo, setShowTwo] = useState(false);
const handleCloseTwo = () => setShowTwo(false);
// supply entry
const [supplyDataView, setsupplyDataView]= useState(null);
const [supplyDataViewHeaders, setsupplyDataViewHeaders]= useState(null);

const [title, settitle] = useState("");
  const [file, setfile] = useState("");

  const [titlesupply, settitlesupply] = useState("");
  const [filesupply, setfilesupply] = useState("");

  const handleSubmit = events => {
    console.log("hi");
    let form_data = new FormData();
    form_data.append('audio', file);
    form_data.append('title', title);
    let url = 'http://127.0.0.1:8000/Optimiser/posts/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
          //document.getElementById("textfill").append(res.data);
        })
        .catch(err => console.log(err))
  }

  const handleSubmitsupply = events => {
    console.log("hi");
    let form_data = new FormData();
    form_data.append('audio', filesupply);
    form_data.append('title', titlesupply);
    let url = 'http://127.0.0.1:8000/Optimiser/postssupply/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
          //document.getElementById("textfill").append(res.data);
        })
        .catch(err => console.log(err))
  }

  const handleSubmitAttrition = events => {
    console.log("hi");
    let form_data = new FormData();
    form_data.append('audio', filesupply);
    form_data.append('title', titlesupply);
    let url = 'http://127.0.0.1:8000/Optimiser/postssupply/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
          //document.getElementById("textfill").append(res.data);
        })
        .catch(err => console.log(err))
  }


  const getGraphSection=async () => {
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

fetch(`http://localhost:8000/Optimiser/getExternalGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setExternalGraphData(response))
.catch(error => console.log(console.error()))

fetch(`http://localhost:8000/Optimiser/getInternalGraphData/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setInternalGraphData(response))
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


fetch(`http://localhost:8000/Optimiser/getSectionWiseHeadCountStatus/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setOverviewHeadCount(response))
.catch(error => console.log(console.error()))

fetch(`http://localhost:8000/Optimiser/getAttritionHeadCountStatus/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setOverviewAttrionmethod(response))
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

fetch(`http://localhost:8000/Optimiser/getAttritionDetails/?section=${selectedOption}&bu=${selectedOptionBu}`,{
method:'GET',
headers:{
    'Content-Type':'application/json'
}
})
.then(response => response.json())
.then(response => setattritionData(response))
.catch(error => console.log(console.error()))

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
    fetch(`http://localhost:8000/Optimiser/getAttritionHeadCountStatus/?section=${selectedOption}&bu=${selectedOptionBu}`,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
    })
    .then(response => response.json())
    .then(response => setOverviewAttrionmethod(response))
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
        fetch(`http://localhost:8000/Optimiser/getSupplyDataView/?bu=${selectedOptionBu}&section=${selectedOption}`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then(response => response.json())
        .then(response => setsupplyDataView(response))
        .catch(error => console.log(console.error()))
      },[])

      useEffect(() => {
        fetch(`http://localhost:8000/Optimiser/getSupplyDataViewHeaders/?bu=${selectedOptionBu}&section=${selectedOption}`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then(response => response.json())
        .then(response => setsupplyDataViewHeaders(response))
        .catch(error => console.log(console.error()))
      },[])

      
      const setOverviewAttrionmethod=response => {
        response.forEach(entry => {
          setoverviewAttrition(entry.attritionhc);
        });
      }


      const setYearlyData=response => {
        response.forEach(entry => {
          setpercentageTotalSupply(entry.percentage);
          setpercentageTotalSupplyTwo(entry.percentageP);
          settotalSupplynumber(entry.totalS);
          settotaldemandnumber(entry.totalD);
        });
      }
      const setYearlyDataTotalExternal=response => {
        response.forEach(entry => {
          setpercentageTotalSupplyExternal(entry.percentageE);
          setpercentageTotalSupplyExternalTwo(entry.percentageEP);
          settotalSupplynumberExternal(entry.totalSE);
          settotaldemandnumberExternal(entry.totalDE);
        });
      }
      const setYearlyDataTotalInternal=response => {
        response.forEach(entry => {
          setpercentageTotalSupplyInternal(entry.percentageI);
          setpercentageTotalSupplyInternalTwo(entry.percentageIP);
          settotalSupplynumberInternal(entry.totalSI);
          settotaldemandnumberInternal(entry.totalDI);
        });
      }
      const setCumulativeGraphData=response => {
        let weekListcumulative=[];
        let cumulativeupdatedList=[];
        let cumulativeOptimiserList=[];
        let cumulativeSupplyListinternal=[];
        let cumulativeSupplyListexternal=[];
        response.forEach(entry => {
          weekListcumulative.push(entry.week);
          cumulativeupdatedList.push(entry.Planned_Demand_With_AttrCumulative);
          cumulativeOptimiserList.push(entry.Cum_Revised_Demand);
          cumulativeSupplyListinternal.push(entry.Internal_FulfilledCumulative);
          cumulativeSupplyListexternal.push(entry.External_FulfilledCumulative);
        });
        // graph one
      setweekcumulative(weekListcumulative);
      setcumulativeupdated(cumulativeupdatedList);
      setcumulativeOptimiser(cumulativeOptimiserList);
      setcumulativeSupplyinternal(cumulativeSupplyListinternal);
      setcumulativeSupplyexternal(cumulativeSupplyListexternal);
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
        updatedDemandweekListExternal.push(entry.Planned_Demand_With_AttrCumulative);
        previousSupplyCumExterList.push(entry.previouscumsupply);
      });
      setsupplyFilledexternal(SuppluFilledexternalList);
      setupdatedDemandweekExternal(updatedDemandweekListExternal);
      setrevisedDemandExternal(revisedDemandListExternal);
      setweekexternal(weekListExternal);
      setpreviousSupplyCumExternal(previousSupplyCumExterList);
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
        updatedDemandweekListInternal.push(entry.Planned_Demand_With_AttrCumulative);
        previousSupplyCumExterList.push(entry.previouscumsupply);
      });
      setupdatedDemandweekInternal(updatedDemandweekListInternal);
      setrevisedDemandInternal(revisedDemandListInternal);
      setsupplyFilledInternal(supplyFilledInternalList);
      setweekinternal(weekListInternal);
      setpreviousSupplyCumInternal(previousSupplyCumExterList);
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

    const setOverviewHeadCount=response => {
    response.forEach(entry => {
    setoverviewHeadCount(entry.Current_Headcount);
    });
    }

    const setattritionForecastMethod=response => {
      response.forEach(entry => {
        setattritionForecast(entry.attr_Annualized_percentage);
      });
    }
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  return (
    <div className="App">
       <img src={Boschrow} className="boschHeaderrow"/>
       <br/> <br/>
      <Container> 
      <SideTabNavigation></SideTabNavigation>
      
     
      <Row>
      <Col  xs={3}> <img src={Boschlogo} className="boschHeader"/> </Col>
      <Col  xs={4}> <h5 id="title">BGSW Talent Demand Supply Management </h5> </Col>
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
              <br/>
              <div class="tab">
                        <button class="tablinks active" onClick={ e=> openCity(e,'London') } >Demand Supply Overview</button>
                        <button class="tablinks" onClick={ e=> openCity(e,'Paris') } >Demand Supply  Weekly Analysis</button>
                        <button class="tablinks" onClick={ e=> openCity(e,'Tokyo') } >Demand </button>
                        <button class="tablinks" onClick={ e=> openCity(e,'Supply') } >Supply </button>
                        <button class="tablinks" onClick={ e=> openCity(e,'Attrition') } >Attrition </button>
                       
                      </div>

<br/>
                      <div id="London" class="tabcontent" style={{display:"block"}}>
                      <Row>
                      <Col  xs={4}> <br/> <p id="dateorder"> {date} {monthNames[month]}  {year} ,You are in CW15 </p> </Col>
                        <Col xs={2}>  <p id="chc"> Current HC <br/> {overviewHeadCount}   </p></Col>
                        <Col xs={2}> <p id="chBuffer"> Buffer <br/> 0   </p></Col>
                        <Col xs={2}> <p id="chattrition"> Attrition<br/> {overviewAttrition} <i class="a-icon ui-ic-inline-externallink" onClick={ ()=> getattritionSection() }></i>  </p></Col>
                        <Col xs={2}> <p id="chforecast"> Attrition Forecast <br/> {attritionForecast}%   </p></Col>
                             

                             
                              {/* <Col  xs={2}></Col>
                              <Col xs={7}> 
                              <table class="m-table" id="overview" >
                                <tbody> 
                              <tr> <td id="overview"> Current HC :  {overviewHeadCount}  </td> 
                               <td id="overview"> Buffer : 0</td>
                               <td id="overview"> Attrition : {overviewAttrition} <i class="a-icon ui-ic-inline-externallink" onClick={ ()=> getattritionSection() }></i> </td>  
                               <td id="overview"> Attrition Forecast :{attritionForecast}% </td> </tr>
                              </tbody>
                              </table>
                              </Col> */}
                      </Row>
                        <Row>
                          <Col xs={6}> <YearlyTableData tabledata={quarterlyData}></YearlyTableData> </Col>
                          <Col xs={6}> <SupplyPerfomance total={percentageTotalSupply} totalSupplynumber={totalSupplynumber} totaldemandnumber={totaldemandnumber} percentageTotalSupplyTwo={percentageTotalSupplyTwo}  internal={percentageTotalSupplyInternal} totalSupplynumberInternal={totalSupplynumberInternal} totaldemandnumberInternal={totaldemandnumberInternal} percentageTotalSupplyInternalTwo={percentageTotalSupplyInternalTwo} external={percentageTotalSupplyExternal}  percentageTotalSupplyExternalTwo={percentageTotalSupplyExternalTwo} totalSupplynumberExternal={totalSupplynumberExternal} totaldemandnumberExternal={totaldemandnumberExternal}></SupplyPerfomance> </Col>
                        </Row>
                      </div>

                      <div id="Paris" class="tabcontent">
                      <Row>
                          <Col xs={4}> <DemandSupplyGraphCumulative  weekcumulative={weekcumulative} cumulativeSupplyinternal={cumulativeSupplyinternal} cumulativeSupplyexternal={cumulativeSupplyexternal} cumulativeupdated={cumulativeupdated} cumulativeOptimiser={cumulativeOptimiser} indicatorinternal={indicatorinternal}></DemandSupplyGraphCumulative> </Col>
                          <Col xs={4}> <DemandSupplyGraphInternal weekinternal={weekinternal} supplyFilledInternal={supplyFilledInternal} updatedDemandweekInternal={updatedDemandweekInternal} revisedDemandInternal={revisedDemandInternal} previousSupplyCumInternal={previousSupplyCumInternal}  indicatorinternal={indicatorinternal} > </DemandSupplyGraphInternal> </Col>
                          <Col xs={4}> <DemandSupplyGraphExternal  weekexternal={weekexternal} revisedDemandExternal={revisedDemandExternal} supplyFilledexternal={supplyFilledexternal} updatedDemandweekExternal={updatedDemandweekExternal}  previousSupplyCumExternal={previousSupplyCumExternal} indicatorinternal={indicatorinternal} > </DemandSupplyGraphExternal> </Col>
                      </Row>
                      <Row>
                      <Col xs={4}> <Recommendation recommendations={recommendations}> </Recommendation> </Col>
                      <Col xs={4}> <InternalPerfomance internalCurrentrunrate={internalCurrentrunrate} internalExpectedrunrate={internalExpectedrunrate} internaltimetoFulfill={internaltimetoFulfill} internaltargetrunrate={internaltargetrunrate} >  </InternalPerfomance> </Col>
                      <Col xs={4}> <Externalperfomance externalCurrentrunrate={externalCurrentrunrate}  externalExpectedrunrate={externalExpectedrunrate} externaltimetoFulfill={externaltimetoFulfill} externaltargetrunrate={externaltargetrunrate}> </Externalperfomance> </Col>

                      </Row>
                      </div>

                      <div id="Tokyo" class="tabcontent">
                      <div class="m-form-field">
                      <div class="a-text-field">
                  <label for="checkbox-checkbox-1">Filename</label>
                  <input type="text" placeholder='Title' id='title' value={title} onChange={e => settitle(e.target.value)} required/>
                </div>
                  <br/> <br/>
                <div class="a-text-field">
                  <label for="checkbox-checkbox-1">Select the file</label>
                  <input type="file"  id="image" onChange={e => setfile(e.target.files[0])} required/>
                </div>
                <br/> <br/>
                <Row> 
                <Col  xs={1}>
                  <button type="button" class="a-button a-button--primary -without-icon" onClick={ ()=> handleSubmit() }>
                                <div class="a-button__label">Submit</div>
                  </button> 
                </Col>
                <Col  xs={7}>
                      <p id="textfill"> </p> </Col>
                        </Row>
            </div>
                      </div>

                      <div id="Supply" class="tabcontent">
                                  <div class="m-form-field">
                                  <div class="a-text-field">
                              <label for="checkbox-checkbox-1">Filename</label>
                              <input type="text" placeholder='Title' id='supplytitle' value={titlesupply} onChange={e => settitlesupply(e.target.value)} required/>
                            </div>
                              <br/> <br/>
                            <div class="a-text-field">
                              <label for="checkbox-checkbox-1">Select the file</label>
                              <input type="file"  id="supplyimage" onChange={e => setfilesupply(e.target.files[0])} required/>
                            </div>
                            <br/> <br/>
                            <Row> 
                            <Col  xs={1}>
                              <button type="button" class="a-button a-button--primary -without-icon" onClick={ ()=> handleSubmitsupply() }>
                                            <div class="a-button__label">Submit</div>
                              </button> 
                            </Col>
                            <Col  xs={7}>
                                  <p id="textfill"> </p> </Col>
                                    </Row>
                          </div>
                      </div>

                      <div id="Attrition" class="tabcontent">

                      <div class="m-form-field">
                      <div class="a-dropdown">
                        <label for="3">Type</label>
                        <select id="sectionDropdown"   value={selectedOption} onChange={e => setSelectedOption(e.target.value)} >
                        <option value="BGSW">BGSW</option>
                        <option value="BU">BU</option>
                        <option value="Section">Section</option>
                        </select>
                        </div>
                        </div>

                        <br/> 

                      <div class="m-form-field">
                      <div class="a-text-field">
                  <label for="checkbox-checkbox-1">Filename</label>
                  <input type="text" placeholder='Title' id='supplytitle' value={titlesupply} onChange={e => settitlesupply(e.target.value)} required/>
                </div>
                  <br/> <br/>
                <div class="a-text-field">
                  <label for="checkbox-checkbox-1">Select the file</label>
                  <input type="file"  id="supplyimage" onChange={e => setfilesupply(e.target.files[0])} required/>
                </div>
                <br/> <br/>
                <Row> 
                <Col  xs={1}>
                  <button type="button" class="a-button a-button--primary -without-icon" onClick={ ()=> handleSubmitsupply() }>
                                <div class="a-button__label">Submit</div>
                  </button> 
                </Col>
                <Col  xs={7}>
                      <p id="textfill"> </p> </Col>
                        </Row>
            </div>
                      </div>

                      <Modal show={showTwo} onHide={handleCloseTwo}>
                        <Modal.Header closeButton>
                          <Modal.Title>Attrition Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div>
                            <AttritionInfo attritionData={attritionData}> </AttritionInfo>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                      </Modal>
      <FooterComp></FooterComp>
      </Container>
    </div>
  );
}

export default App;
