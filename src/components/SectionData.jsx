import React, { useEffect,useState } from "react";
import ReactEcharts from 'echarts-for-react';
function SectionData (){
    // supply fullfilled
  const [supplyData, setsupplyData] = useState(null);
  const [internalFullfilled, setinternalFullfilled] = useState(null);
  const [externalFullfilled, setexternalFullfilled] = useState(null);
 // planned demand
  const [plannedDemand, setplannedDemand] = useState(null);
  const [plannedDemandInternal, setplannedDemandInternal] = useState(null);
  const [plannedDemandExternal, setplannedDemandExternal] = useState(null);
  // updated demand
  const [updatedDemand, setupdatedDemand] = useState(null);
  const [updatedDemandInternal, setupdatedDemandInternal] = useState(null);
  const [updatedDemandExternal, setupdatedDemandExternal] = useState(null);
  // section
  const [section, setsection] = useState(null);
  let supplyFullfilled = [];
  let supplyFullfilledInternal = [];
  let supplyFullfilledExternal = [];
  // planned demand
  let plannedDemandli = [];
  let plannedDemandInternalli = [];
  let plannedDemandEXternalli = [];
  // updated demand
  let updatedDemandli = [];
  let updatedDemandInternalli = [];
  let updatedDemandExternalli = [];

  let sectionli = [];

  
  useEffect(() => {
    fetch(`http://localhost:8000/Optimiser/getSectionWiseStatusSupply`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setsupplyDataFunction(response))
    .catch(error => console.log(console.error()))
  },[])

  const setsupplyDataFunction= response =>{
    response.forEach(entry => {
      supplyFullfilled = [...new Set([...supplyFullfilled, entry.Total_Supply_Fulfilled])];
      supplyFullfilledInternal = [...new Set([...supplyFullfilledInternal, entry.Total_Supply_Fulfilled])];
      supplyFullfilledExternal = [...new Set([...supplyFullfilledExternal, entry.Total_Supply_Fulfilled])];

      plannedDemandli = [...new Set([...plannedDemandli, entry.Total_Planned_Demand])];
      plannedDemandInternalli = [...new Set([...plannedDemandInternalli, entry.Planned_Demand_Internal])];
      plannedDemandEXternalli = [...new Set([...plannedDemandEXternalli, entry.Planned_Demand_External])];

      updatedDemandli = [...new Set([...updatedDemandli, entry.Total_Updated_Demand])];
      updatedDemandInternalli = [...new Set([...updatedDemandInternalli, entry.Updated_Demand_Internal])];
      updatedDemandExternalli = [...new Set([...updatedDemandExternalli, entry.Updated_Demand_External])];

      sectionli = [...new Set([...sectionli, entry.sector_name])];
      
    }
    );
    console.log("above");
    setsupplyData(supplyFullfilled);
    setinternalFullfilled(supplyFullfilledInternal);
    setexternalFullfilled(supplyFullfilledExternal);

    setplannedDemand(plannedDemandli);
    setplannedDemandInternal(plannedDemandInternalli);
    setplannedDemandExternal(plannedDemandEXternalli);

    setupdatedDemand(updatedDemandli);
    setupdatedDemandInternal(updatedDemandInternalli);
    setupdatedDemandExternal(updatedDemandExternalli);

    setsection(sectionli);
  }


    return ( 
        
            <div>
                         <ReactEcharts
        option = {{
          tooltip: {
            trigger: 'axis',
            
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            data: ['Planned Demand Internal', 'Planned Demand External','Updated Demand Internal','Updated Demand External','Supply Fullfilled']
          },
          xAxis: [
            {
              type: 'category',
              data: section,
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Count of Associates',
              min: 0,
              max: 500,
              interval: 50,
              axisLabel: {
                formatter: '{value} HC'
              }
            },
            {
              type: 'value',
              name: 'Count of Associates',
              min: 0,
              max: 500,
              interval: 50,
            }
              
          ],
          series: [
            {
              name: 'Planned Demand Internal',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: plannedDemandInternal
            },
            {
              name: 'Planned Demand External',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: plannedDemandExternal
            },
            {
              name: 'Updated Demand Internal',
              type: 'bar',
              stack: 'Add',
              emphasis: {
                focus: 'series'
              },
              data: updatedDemandInternal
            },
            {
              name: 'Updated Demand External',
              type: 'bar',
              stack: 'Add',
              emphasis: {
                focus: 'series'
              },
              data: updatedDemandExternal
            },
            {
              name: 'Supply Fullfilled',
              type: 'line',
              yAxisIndex: 1,
              data: supplyData
            },
          ]
        }}
      />
            </div>
    )
}
export  default SectionData;