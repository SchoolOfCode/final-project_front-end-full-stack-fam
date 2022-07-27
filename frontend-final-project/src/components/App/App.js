import './App.css';
// import {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import ParentHomepage from '../ParentHomepage/ParentHomepage';
import ChildHomepage from '../ChildHomepage/ChildHomepage';
import ExpeditionPage from '../ExpeditionPage/ExpeditionPage';
import ActivityPage from '../ActivityPage/ActivityPage';
import ResultsPage from '../ResultsPage/ResultsPage';

// const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";




function App() {

  //  async function fetchData() {
  //   const response = await fetch(url, {
  //     mode: 'cors',
  //     headers: {
  //       'Access-Control-Allow-Origin':'*'
  //     }
  //   });
  //   console.log(response);
  //   const data = response.json();
  //   console.log(data.body);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[]);

  // function handleClick(){
  //   fetchData();
  // }

  return (
    <div className="App">
     <h1> Welcome to Noah's React Router! </h1>
     {/* <button onClick = {handleClick}>GET DATA</button> */}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="signup" element={<SignupPage/>} />
        <Route path="parent" element={<ParentHomepage/>} />
        <Route path="child" element={<ChildHomepage/>} />
        <Route path="expedition" element={<ExpeditionPage/>} />
        <Route path="activity" element={<ActivityPage/>} />
        <Route path="results" element={<ResultsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
