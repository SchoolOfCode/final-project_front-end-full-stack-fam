import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./Pages/OverviewPage";
import WeeklyARPage from "./Pages/WeeklyARPage";
import ParentHomepage from "./ParentHomepage";

const Routing = () => {
    return (
        <Routes path="/" element={<ParentHomepage/>}>
        <Route path="/parent/overview" element={<Overview />} />
        <Route path="/parent/weekly-activity-report" element={<WeeklyARPage />} />
        </Routes>
    );
};

export default Routing;