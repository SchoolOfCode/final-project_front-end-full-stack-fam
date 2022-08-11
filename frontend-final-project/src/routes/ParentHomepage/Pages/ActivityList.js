import React from "react";

const ActivityList = ( {activityList}) => {
    return (
    <div>
        <h4> Number Line </h4>
        <ul className="activity-list">
           { activityList.map(function(item)
           {
               return <li> Score: {item.scoreone}% </li>
           }
           )} 
        </ul>
    
    </div> 
    )
};

export default ActivityList;