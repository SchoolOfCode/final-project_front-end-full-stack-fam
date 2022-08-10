import React from "react";
import "./OverviewPage.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbMathSymbols } from "react-icons/tb";
import BasicTabs from "./Tabs/Tabs";

const Overview = ({userData}) => {
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
          <h4> Name: {userData[0].name} </h4>
          <h4> Activities Completed: {userData.length} </h4>
          <h4> Progress to yearly target: 10%- hardcoded?</h4>
        </div>

        <div class="grid-topics">
          <h2 className="subheadings-overview">
            {" "}
            <TbMathSymbols /> Topics{" "}
          </h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            dolorem deserunt minus error earum, labore perspiciatis repellendus
            porro laborum aspernatur reprehenderit quia ducimus officia
            distinctio incidunt maiores explicabo suscipit optio!{" "}
          </p>
        </div>

        <div class="basic-tabs">
          <BasicTabs />
        </div>
      </div>
    </div>
  );
};

export default Overview;
