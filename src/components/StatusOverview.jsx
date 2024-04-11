import React from "react";

function StatusOverview (){
    return (
        <div>
                <table class="m-table" aria-label="Highlights">
  <thead>
    <tr>
      <th>Status Overview</th>
      <th>Count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Current HC</td>
      <td>1025</td>
    </tr>
    <tr>
      <td>TBP demand</td>
      <td>75</td>
    </tr>
    <tr>
      <td>Optimiser Demand</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
export  default StatusOverview;