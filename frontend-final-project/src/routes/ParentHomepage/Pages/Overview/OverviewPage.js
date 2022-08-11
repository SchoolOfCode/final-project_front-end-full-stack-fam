import React from "react";
import "./OverviewPage.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbMathSymbols } from "react-icons/tb";
import BasicTabs from "./Tabs/Tabs";

const Overview = ({userData, attempts}) => {
  return (
    <div className="body-overview-page">
      {/* font size on h1 would not change so I made the heading a h2 instead */}
      <h2 className="overview-heading"> Overview </h2>

      <div class="grid-container-overview">
        <div class="grid-student-profile">
          <h2 className="subheadings-overview ">
            {" "}
            <IoPersonCircleOutline /> Student Profile{" "}
          </h2>
          <h4> Name: {userData.name} </h4>
          <h4> Activities Completed: 1/7 </h4>
          <h4> Progress to yearly target: 10%- hardcoded?</h4>
        </div>

        <div class="grid-topics">
          <h2 className="subheadings-overview">
            {" "}
            <TbMathSymbols /> Topics{" "}
          </h2>
          <h4> Number and place value </h4>
          <h4> Addition and subtraction </h4>
          <h4> Multiplication and division </h4>
          <h4> Fractions </h4>
          <h4> Measurements </h4>
          <h4> Geometry </h4>
          <h4> Statistics </h4>
        </div>

        <div class="basic-tabs">
          <BasicTabs userData = {userData} attempts = {attempts}  />
        </div>
      </div>
    </div>
  );
};

export default Overview;
