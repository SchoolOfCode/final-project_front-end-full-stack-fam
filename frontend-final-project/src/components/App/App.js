import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import LandingPage from "../../routes/LandingPage/LandingPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import SignupPage from "../../routes/SignupPage/SignupPage";
import ParentHomepage from "../../routes/ParentHomepage/ParentHomepage";
import ChildHomepage from "../../routes/ChildHomepage/ChildHomepage";
import ExpeditionPage from "../../routes/ExpeditionPage/ExpeditionPage";
import ActivityIntroPage from "../../routes/ActivityIntroPage/ActivityIntroPage"
import ActivityPage from "../../routes/ActivityPage/ActivityPage";
import ResultsPage from "../../routes/ResultsPage/ResultsPage";
import LogoutButton from "../Login/LogoutButton";




function App() {
  //We are setting this state at the top level so it can be drilled down to both the activity and the results page
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [percentageState , setPercentageState] = useState(0);
  const [childData, setchildData] = useState();
  const [parentData, setparentData] = useState();

 async function getDataChild() {
    let response = await fetch("https://fullstack-family.herokuapp.com/child");
    let data = await response.json();
    setchildData(data)
  }

  getDataChild();
// console.log(childData);

async function getDataParent() {
  let response = await fetch("https://fullstack-family.herokuapp.com/parent");
  let data = await response.json();
  setparentData(data)
}

getDataParent();
console.log(parentData);

  return (
    <div className="App">
    
      {/* <h1> Welcome to Jungle Sums! </h1> */}
      {/* <LoginButton /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage childData={childData}/>} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="parent" element={<ParentHomepage />} />
        <Route path="child" element={<ChildHomepage />} />
        <Route path="expedition" element={<ExpeditionPage />} />
        {/* this new route has been created- a page before the activity to explain
        how the activity works + reset the score */}
        <Route path="activity-intro" element={
          <ActivityIntroPage score = {score} setScore = {setScore} clicks = {clicks} setClicks = {setClicks}/>} />

        <Route path="activity" element={
          <ActivityPage score = {score} setScore = {setScore} clicks = {clicks} setClicks = {setClicks} percentageState = {percentageState} setPercentageState = {setPercentageState}/>} />
          
        <Route path="results" element={
          <ResultsPage score= {score} clicks = {clicks} percentageState = {percentageState} setPercentageState = {setPercentageState}/>} />

      </Routes>
    </div>
  );
}

export default App;
