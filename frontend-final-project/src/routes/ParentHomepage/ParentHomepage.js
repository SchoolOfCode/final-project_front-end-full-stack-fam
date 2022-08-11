import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles.js"
import { darkTheme, lightTheme } from "./Styles/theme.js"
import Overview from "./Pages/Overview/OverviewPage.js";
import WeeklyARPage from "./Pages/WeeklyARPage.js";
import Support from "./Pages/Support.js";
import Layout from "./Layout/Layout.js";
import "./ParentHomepage.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom"


export const ThemeContext = React.createContext(null);


const ParentHomepage = () => {
    const { user, isAuthenticated } = useAuth0()
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;
    const [userData, setUserData] = useState({})
    const [attempts, setAttempts] = useState()
    const navigate = useNavigate()
    const [activityList, setActivityList] = useState([])

   
    //If the user is not logged in, automatically redirects back to landing page.
    // if(!isAuthenticated) {
    // navigate("/");
    // }

    async function getChildDataByEmail() {
        let response = await fetch(`https://fullstack-fam.herokuapp.com/parent/search/?email=${user.email}`);
        let data = await response.json();
        console.log(data.payload)
        setActivityList(data.payload)
        setUserData(data.payload[(data.payload.length)-1])
        setAttempts(data.payload.length)
      }
      
      useEffect(() => {
      getChildDataByEmail();
      }, []);

    return (
        <div className="background-parent-homepage"> 
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                {/* the sub routes in the parent homepage: */}
                <Layout>
                <Routes>
                <Route path="/" element={<Overview userData = {userData} attempts = {attempts} />} />
                <Route path="weekly-activity-report" element={<WeeklyARPage activityList = {activityList}/>} />
                <Route path="support" element={<Support />} />
                </Routes>
                </Layout>
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
        </div>
    );
};

export default ParentHomepage;