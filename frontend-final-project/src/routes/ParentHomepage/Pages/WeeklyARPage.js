import React from "react";
import ActivityList from "./ActivityList";
import "./WeeklyARPage.css"


const WeeklyARPage = ( {activityList}) => {
    return (
    <div classNam="body-weekly-page">
    <h1>Weekly Page</h1>


    <div class="grid-container-weekly">
        <div class="grid-weekly-profile">
          <h2 >
         Weekly Activity Report
          </h2>
          <ActivityList activityList = {activityList}/>
        </div>

    </div>

    </div> 
    )
};

export default WeeklyARPage;