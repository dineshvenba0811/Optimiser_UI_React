import React, { useEffect,useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Recommendation (props){
    return ( 
        <div>
            <p id="overviewperfomanceOne">Recommendation </p>
            <table class="m-table" id="overviewperfomance">
                <thead>
                </thead>
                <tbody>
                <tr><td>{props.recommendations}</td></tr>
                </tbody>
            </table>
        </div>
    ) 
}
export  default Recommendation;