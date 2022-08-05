import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import LogoutButton from '../../components/Login/LogoutButton';
import './ChildHomepage.css';
import CircularProgressWithLabel from '@mui/material/CircularProgress';

export default function ChildHomepage() {

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const expOneProgress = 89;
  const expTwoProgress = 100;
  const expThreeProgress = 100;
  
  //If the user is not logged in, automatically redirects back to landing page.
  if(!isAuthenticated) {
    navigate("/");
  }

    return <>
      <div className= "page-container">
        <LogoutButton/> 
        <main className= "child-homepage">
          <div className= "background-card">
            <section className = "child-homepage-heading-container">
              <h1 className ='child-homepage-header'>Welcome back, <br/> Adventurer!</h1>
              <h2 className = "child-homepage-subheader">
                Choose your expedition!
              </h2>
            </section>
            <section className="expedition-container">
              <button className = "expedition-button">
                <section className= "expedition-card">
                  <CircularProgressWithLabel size= '10vw' variant="determinate" value={expOneProgress} style = {{ margin: '0', color: 'rgb(249, 189, 37)', position:'relative'}} />
                  <div className= "percentage-display">{expOneProgress}%</div>
                </section>
              </button>
              <button className = {"expedition-button " + "locked"} >
                <section className= "expedition-card">
                  <CircularProgressWithLabel size= '10vw' variant="determinate" value={expTwoProgress} style = {{ margin: '0', color: 'rgb(249, 189, 37)', position:'relative'}} />
                  <div className= "percentage-display">locked</div>
                </section>
              </button>
              <button className = {"expedition-button " + "locked"}>
                <section className= "expedition-card">
                  <CircularProgressWithLabel size= '10vw' variant="determinate" value={expThreeProgress} style = {{ margin: '0', color: 'rgb(249, 189, 37)', position:'relative'}} />
                  <div className= "percentage-display">locked</div>
                </section>
              </button>
            </section>
            <section className= 'expedition-button-container'>
              <nav className= "nav">
                <Link to="/login">
                  <button className='back-button'>Back to Login</button>
                </Link>
              </nav>
              <nav className= "nav">
                <Link to="/expedition">
                  <button className='exp-button'>Choose Expedition</button>
                </Link>
              </nav>
            </section>
          </div>
        </main>
      </div>
      </>
  }