// import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Login/LogoutButton';

import Timer from '../ActivityPage/NumLine/CountdownTimer.js';

import './ActivityPage.css';
import NumLine from './NumLine/NumLine';
import { ReactComponent as MySvgDay} from '../../daytime-jungle.svg';
import { ReactComponent as MySvgNight} from '../../nighttime-jungle.svg';

export default function ActivityPage({score, setScore, clicks ,setClicks}) {
    

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
                <NumLine score = {score} setScore = {setScore} clicks = {clicks} setClicks = {setClicks}/>
              </div>
          </div>
          <div className="banana-container">
          <img src="banana-line-drawing.png" alt="banana" width="50" height="50"></img>
          <Timer className='the-countdown-text' initialMinute = {0} initialSeconds = {60}/>
          </div>

        </main>

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