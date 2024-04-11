import React, { useEffect,useState } from "react";
import ReactEcharts from 'echarts-for-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TBPAnalysis (){
let section=10;
const [currentHeadCountSkillset, setcurrentHeadCountSkillset] = useState(null);
const [currentHeadCountSkill, setcurrentHeadCountSkill] = useState(null);
const [currentHeadCountCluster, setcurrentHeadCountCluster] = useState(null);
const [currentHeadCountSection, setcurrentHeadCountSection] = useState(null);

const [currentHeadCountSiteoffshore, setcurrentHeadCountSiteoffshore] = useState(0);
const [currentHeadCountSiteextenal, setcurrentHeadCountSiteextenal] = useState(0);
const [currentHeadCountSiteinternal, setcurrentHeadCountSiteinternal] = useState(0);

const [currentHeadCountLocationExternal, setcurrentHeadCountLocationExternal] = useState(0);
const [currentHeadCountLocationInternal, setcurrentHeadCountLocationInternal] = useState(0);

const [skillsetName, setskillsetName] = useState(null);
const [skillName, setskillName] = useState(null);
const [clusterName, setclusterName] = useState(null);
const [sectionName, setsectionName] = useState(null);
const [deliverySiteName, setdeliverySiteName] = useState(null);

const [locationName, setlocationName] = useState(null);

let currentHeadCountSkillsetList = [];
let currentHeadCountSkillList = [];
let currentHeadCountClusterList = [];
let currentHeadCountSectionList = [];
let currentHeadCountSiteList = [];

let skillsetNameList = [];
let skillNameList = [];
let clusterNameList = [];
let sectionNameList = [];
let deliverySiteNameList = [];
let locationNameList = [];

    useEffect(() => {
        fetch(`http://localhost:8000/Optimiser/getTBPAnalysisDataGroupBySkillset/?section=${section}`,{
          method:'GET',
          headers:{
              'Content-Type':'application/json'
          }
          })
          .then(response => response.json())
          .then(response => getTBPAnalysisDataGroupBySkillset(response))
          .catch(error => console.log(console.error()))
        },[])

        const getTBPAnalysisDataGroupBySkillset=response => {
            console.log(response);
            response.forEach(entry => {
                currentHeadCountSkillsetList = [...new Set([...currentHeadCountSkillsetList, entry.Current_HC])];
                skillsetNameList = [...new Set([...skillsetNameList, entry.skill_set_name])];
          });
          setcurrentHeadCountSkillset(currentHeadCountSkillsetList);
          setskillsetName(skillsetNameList);
          }


          useEffect(() => {
            fetch(`http://localhost:8000/Optimiser/getTBPAnalysisDataGroupBySkill/?section=${section}`,{
              method:'GET',
              headers:{
                  'Content-Type':'application/json'
              }
              })
              .then(response => response.json())
              .then(response => getTBPAnalysisDataGroupBySkill(response))
              .catch(error => console.log(console.error()))
            },[])
    
            const getTBPAnalysisDataGroupBySkill=response => {
                console.log(response);
                response.forEach(entry => {
                    currentHeadCountSkillList = [...new Set([...currentHeadCountSkillList, entry.Current_HC])];
                    skillNameList = [...new Set([...skillNameList, entry.skill_name])];
              });
              setcurrentHeadCountSkill(currentHeadCountSkillList);
              setskillName(skillNameList);
              }

              useEffect(() => {
                fetch(`http://localhost:8000/Optimiser/getTBPAnalysisDataGroupByCluster/?section=${section}`,{
                  method:'GET',
                  headers:{
                      'Content-Type':'application/json'
                  }
                  })
                  .then(response => response.json())
                  .then(response => getTBPAnalysisDataGroupByCluster(response))
                  .catch(error => console.log(console.error()))
                },[])
        
                const getTBPAnalysisDataGroupByCluster=response => {
                    console.log(response);
                    response.forEach(entry => {
                        currentHeadCountClusterList = [...new Set([...currentHeadCountClusterList, entry.Current_HC])];
                        clusterNameList = [...new Set([...clusterNameList, entry.cluster_name])];
                  });
                  setcurrentHeadCountCluster(currentHeadCountClusterList);
                  setclusterName(clusterNameList);
                  }

                  useEffect(() => {
                    fetch(`http://localhost:8000/Optimiser/getTBPAnalysisDataGroupBySection`,{
                      method:'GET',
                      headers:{
                          'Content-Type':'application/json'
                      }
                      })
                      .then(response => response.json())
                      .then(response => getTBPAnalysisDataGroupBySection(response))
                      .catch(error => console.log(console.error()))
                    },[])
            
                    const getTBPAnalysisDataGroupBySection=response => {
                        console.log(response);
                        response.forEach(entry => {
                            currentHeadCountSectionList = [...new Set([...currentHeadCountSectionList, entry.Current_HC])];
                            sectionNameList = [...new Set([...sectionNameList, entry.sector_name])];
                            
                      });
                      setcurrentHeadCountSection(currentHeadCountSectionList);
                      setsectionName(sectionNameList);
                      }

                      useEffect(() => {
                        fetch(`http://localhost:8000/Optimiser/getTBPAnalysisDataGroupByDeliverySite?section=${section}`,{
                          method:'GET',
                          headers:{
                              'Content-Type':'application/json'
                          }
                          })
                          .then(response => response.json())
                          .then(response => getTBPAnalysisDataGroupByDeliverySite(response))
                          .catch(error => console.log(console.error()))
                        },[])
                
                        const getTBPAnalysisDataGroupByDeliverySite=response => {
                            console.log(response);
                            response.forEach(entry => {
                              if(entry.delivery_site_name=="Offshore"){
                                setcurrentHeadCountSiteoffshore(entry.Current_HC);
                              }else if(entry.delivery_site_name=="External"){
                                setcurrentHeadCountSiteextenal(entry.Current_HC);
                              }else if(entry.delivery_site_name=="Onsite"){
                                setcurrentHeadCountSiteinternal(entry.Current_HC);
                              }else{

                              }
                          });
                        }

                        useEffect(() => {
                          fetch(`http://localhost:8000/Optimiser/getTBPAnalysisDataGroupByLocation?section=${section}`,{
                            method:'GET',
                            headers:{
                                'Content-Type':'application/json'
                            }
                            })
                            .then(response => response.json())
                            .then(response => getTBPAnalysisDataGroupByLocation(response))
                            .catch(error => console.log(console.error()))
                          },[])

                        const getTBPAnalysisDataGroupByLocation=response => {
                          console.log(response);
                          response.forEach(entry => {
                            if(entry.location_name=="RBEI"){
                              setcurrentHeadCountLocationInternal(entry.Current_HC);
                            }else if(entry.location_name=="External"){
                              setcurrentHeadCountLocationExternal(entry.Current_HC);
                            }else{

                            }
                        });
                      }
    return ( 
            <div>

<Row>

<Col  xs={4}>
<ReactEcharts option={ {
   title: {
    text: 'Section',
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: sectionName
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data:currentHeadCountSection,
      type: 'bar'
    }
  ]
}} /></Col>
<Col  xs={4}>
<ReactEcharts option={{
  title: {
    text: 'Delivery Site',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: currentHeadCountSiteoffshore, name: "Offshore" },
        { value: currentHeadCountSiteextenal, name: "External" },
        { value: currentHeadCountSiteinternal, name: "Onsite" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}} />
</Col>
<Col  xs={4}>
<ReactEcharts option={{
  title: {
    text: 'Location',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: currentHeadCountSiteoffshore, name: "Offshore" },
        { value: currentHeadCountSiteextenal, name: "External" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}} />
</Col>
</Row>
                 <Row>
                 <Col  xs={4}>
<ReactEcharts option={ {
  title: {
    text: 'Cluster',
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: clusterName
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data:currentHeadCountCluster,
      type: 'bar'
    }
  ]
}} /></Col>
                 <Col  xs={4}>
                 <ReactEcharts option={ {
                   title: {
                    text: 'Skillset',
                    left: 'center'
                  },
  xAxis: {
    type: 'category',
    data: skillsetName
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10
    },
    {
      start: 0,
      end: 10
    }
  ],
  series: [
    {
      data:currentHeadCountSkillset,
      type: 'bar'
    }
  ]
}} /> 
</Col>
<Col  xs={4}>
<ReactEcharts option={ {
  title: {
    text: 'Skill',
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: skillName
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10
    },
    {
      start: 0,
      end: 10
    }
  ],
  series: [
    {
      data:currentHeadCountSkill,
      type: 'bar'
    }
  ]
}} />
</Col>
</Row>


            </div>
    )
}
export  default TBPAnalysis;