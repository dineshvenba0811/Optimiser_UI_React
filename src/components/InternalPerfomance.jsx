import React, { useEffect,useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InternalPerfomance (props){
    return ( 
        <div>
            <p id="overviewperfomanceOne">Internal Hiring Perfomance (hires/week) </p>
            <table class="m-table" id="overviewperfomance">
                <thead>
                </thead>
                <tbody>
                <tr >
                <tr> <td id="overviewtable">Target Hiring Rate</td><td id="overviewtableint" >{props.internaltargetrunrate}</td>
                <td id="overviewtable">Current Hiring Rate</td><td id="overviewtableint" >{props.internalCurrentrunrate}</td>
                </tr>
                <tr> <td id="overviewtable">Required Hiring Rate</td><td id="overviewtableint">{props.internalExpectedrunrate}</td>
                <td id="overviewtable">Time to fullfill (weeks)</td><td id="overviewtableint" >{props.internaltimetoFulfill}</td>
                </tr>
                </tr>
                </tbody>
            </table>
        </div>
    ) 
}
export  default InternalPerfomance;