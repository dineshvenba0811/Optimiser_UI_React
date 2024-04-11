import React, { useEffect,useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function YearlyTableData (props){
// attrition section
const getattritionSection = () => {
}

return ( <div>
<br/>
                  <Row> 
                
                  <Col xs={4}>
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
                        <td id="firsttable">Demand UnFullfilled</td>
                      </tr>
                      <tr>
                        <td id="firsttable">Projected Demand</td>
                      </tr>
                    </tbody>
                  </table> 
                </Col>
                    <Col xs={8}>
                      <table class="m-table"  >
                        <thead>
                        
                            <tr>
                             
                                <th >2022</th>
                                <th id="previousquarter">Q 1</th>
                                <th id="currentquarter">Q 2</th>
                                <th id="previousquarter">Q 3</th>
                                <th id="previousquarter">Q 4</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {
                               props.tabledata && props.tabledata.map 
                            ( (events, index) => {
                                console.log(index);
                                return <tr key={events.quarter}>  
                                <td> {events.Quarter0}  </td>
                                <td> {events.Quarter1} </td>
                                <td  id="currentquarter"> {events.Quarter2} </td>
                                {/* { index==2 ? <td> {events.Quarter3} (F) </td> : <td> {events.Quarter3} </td>} */}
                                <td> {events.Quarter3} </td>
                                <td> {events.Quarter4} </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </Col>
            </Row>
 
            </div>
            )
        }
        export  default YearlyTableData;
