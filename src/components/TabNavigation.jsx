import React, { useEffect,useState } from "react";
import TableData from './TableData';
import GraphData from './GraphData';


function TabNavigation (){
  
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
  
  
    return ( 
        
            <div>
                      <div class="tab">
                        <button class="tablinks active" onClick={ e=> openCity(e,'London') } >Supply Demand Analysis</button>
                        <button class="tablinks" onClick={ e=> openCity(e,'Paris') } >Supply Demand Analysis Graph</button>
                        <button class="tablinks" onClick={ e=> openCity(e,'Tokyo') } >Supply Fullfilled Tracker</button>
                      </div>

                      <div id="London" class="tabcontent">
                       <TableData></TableData>
                      </div>

                      <div id="Paris" class="tabcontent">
                        <GraphData></GraphData>
                      </div>

                      <div id="Tokyo" class="tabcontent">
                        <h3>Tokyo</h3>
                        <p>Tokyo is the capital of Japan.</p>
                      </div>
            </div>
            )
        }
        export  default TabNavigation;