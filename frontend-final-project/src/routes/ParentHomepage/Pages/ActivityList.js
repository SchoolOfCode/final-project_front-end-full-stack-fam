import React from "react";

const ActivityList = ( {activityList}) => {
    return (
    <div>
        <h4> Number Line </h4>
        <ul className="activity-list">
           { activityList.map(function(item)
           {
               return <li>
                {item.datecompleted}
                <br/>
                {item.name} completed 'Number Line' at {item.timecompleted} with a score of {item.scoreone}%.
                </li>
           }
           )} 
        </ul>
    
    </div> 
    )
};

export default ActivityList;