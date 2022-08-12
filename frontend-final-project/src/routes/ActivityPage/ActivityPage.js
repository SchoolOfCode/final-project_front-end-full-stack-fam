// import { Link } from 'react-router-dom';
import { React , useEffect, useState } from 'react';
import LogoutButton from '../../components/Login/LogoutButton';

import Timer from '../ActivityPage/NumLine/CountdownTimer.js';
import { LinearProgBar } from '../LinearProgBar';

import './ActivityPage.css';
import NumLine from './NumLine/NumLine';
import { ReactComponent as MySvgDay} from '../../daytime-jungle.svg';
import { ReactComponent as MySvgNight} from '../../nighttime-jungle.svg';

export default function ActivityPage({score, setScore, clicks , setClicks , mismatch , setMismatch}) {
  
  // const [isVisible , setIsVisible] = useState(false);


  //   useEffect(() => {
  //     const showBanana1 = event => {
  //     if (score <= 1) {
  //       setIsVisible(true)
  //     };

  //     }

// no comment

  return (
      <>
        <LogoutButton/>
        <MySvgDay className='activity-background-image-daytime'/>
        <MySvgNight className='activity-background-image-nighttime'/>

        <div className='title-text-container'>
          <h1 className='the-activity-heading'>Number Line</h1>
          <h2 className='lets-go-h2'>LET'S GO!</h2>
        </div>

        <main className ="focus-area">

          <div className='the-card-div-activity'>
            <h3 className='the-activity-description'>Fill in the missing numbers to collect the fruit...</h3>
            <div className='num-line-container'>
                <NumLine score = {score} setScore = {setScore} clicks = {clicks} setClicks = {setClicks} mismatch = {mismatch} setMismatch = {setMismatch}/>
              </div>
          </div>

          <div className="banana-container">
            <img className="banana-1" src="banana-line-drawing.png" alt="banana" width="70" height="70"></img>
            <img className="banana-2" src="banana-line-drawing.png" alt="banana" width="70" height="70"></img>
            <img className="banana-3" src="banana-line-drawing.png" alt="banana" width="70" height="70"></img>
          </div>
        </main>
        
          <div className="the-invisible-timer">
            <Timer className='the-countdown-text' initialMinute = {0} initialSeconds = {60}/>
          </div>
          <div className='the-score-container'>
              <p className = "score-counter">SCORE: {score} WRONG: {mismatch}</p> 
            </div>

        {/* <nav>
          <Link to="/login">Back to Log In</Link>
        </nav>
        <nav>
          <Link to="/child">Back to Child Homepage</Link>
        </nav>
        <nav>
          <Link to="/expedition">Back to Expedition</Link>
        </nav>
        <nav>
          <Link to="/results">To the results page!</Link>
        </nav> */}
      </>
    );
  }