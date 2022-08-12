import React from "react";
import ActivityList from "./ActivityList";
import "./WeeklyARPage.css"


const WeeklyARPage = ( {activityList}) => {
    return (
    <div classNam="body-weekly-page">
    <h1>Weekly Page</h1>


    <div class="grid-container-weekly">
        <div class="grid-weekly-profile">
          <h2 className="war-text-heading">
            Weekly Activity Report
          </h2>
         <h4 className="war-text"> 
         <ActivityList activityList = {activityList}/>
        </h4> 
        </div>

    </div>

    </div> 
    )
};

export default WeeklyARPage;