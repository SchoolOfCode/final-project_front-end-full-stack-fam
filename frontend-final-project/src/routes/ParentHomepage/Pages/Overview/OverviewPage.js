import React from "react";
import "./OverviewPage.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbMathSymbols } from "react-icons/tb";
import BasicTabs from "./Tabs/Tabs";


const Overview = ({userData, attempts}) => {
  return (
    <div className="body-overview-page">
      {/* font size on h1 would not change so I made the heading a h2 instead */}
      {/* <h2 className="overview-heading"> Overview </h2> */}

      <div class="grid-container-overview">
        <div class="grid-student-profile">
          <h2 className="subheadings-overview">
            {" "}
            <IoPersonCircleOutline /> Student Profile{" "}
          </h2>
          <div className="profile-font"> 
          <h4 className="bold-topics-font"> Name: {userData.name} </h4>
          <h4> Activities Completed: 1/7 </h4>
          </div>
        </div>

        <div class="grid-topics">
          <h2 className="subheadings-topics">
            <TbMathSymbols className="form-text" /> Topics
          </h2>

          <form className="form-text">
          <input type="checkbox" checked /> 
          <label className="bold-topics-font">  Number and place value  </label> <br></br>
          <input type="checkbox" />
          <label> Addition and subtraction </label> <br></br>
          <input type="checkbox" />
          <label> Multiplication and division </label><br></br>
          <input type="checkbox" />
          <label> Fractions </label><br></br>
          <input type="checkbox" />
          <label> Measurements </label><br></br>
          <input type="checkbox" />
          <label> Geometry </label><br></br>
          <input type="checkbox" />
          <label> Statistics </label>
          </form>
        </div>

        <div class="basic-tabs">
          <BasicTabs userData = {userData} attempts = {attempts}  />
        </div>
      </div>
    </div>
  );
};

export default Overview;
