import React from "react";

function AttritionInfo (props){
    return (
        <div>
                <table class="m-table" >
                              <thead>
                                  <tr>
                                      <th>Total_Actual_Attrition</th>
                                      <th>Management</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {
                                    props.attritionData && props.attritionData.map 
                                  ( events => {
                                      return <tr>  
                                        <td> {events.attritionhc} </td>
                                        <td> {events.datadiv} </td>
                                      </tr>
                                  })
                              }
                              </tbody>
                            </table>

        </div>

)
}
export  default AttritionInfo;