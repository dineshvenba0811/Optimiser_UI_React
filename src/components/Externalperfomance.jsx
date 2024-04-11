import React, { useEffect,useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Externalperfomance (props){
    return ( 
        <div>
            <p id="overviewperfomanceOne">External Hiring Perfomance (hires/week) </p>
            <table >
            <thead>
            </thead>
                <tbody>
                    <tr class="m-table" id="overviewperfomance">
                    <tr> <td id="overviewtable">Target Hiring Rate</td><td id="overviewtableint">{props.externaltargetrunrate}</td>
                    <td id="overviewtable">Current Hiring Rate</td><td id="overviewtableint">{props.externalCurrentrunrate}</td></tr>
                    <tr><td id="overviewtable">Required Hiring Rate</td><td id="overviewtableint">{props.externalExpectedrunrate}</td>
                    <td id="overviewtable">Time to fullfill (weeks)</td><td id="overviewtableint">{props.externaltimetoFulfill}</td></tr>
                    </tr> 
                </tbody>
            </table>  
        </div>
    ) 
}
export  default Externalperfomance;