import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Login/LogoutButton';
import './ResultsPage.css';
import { ReactComponent as MySvgNight} from '../../nighttime-jungle.svg';
import CircularDeterminate from '../CircularDeterminate';


export default function ResultsPage({score, clicks, setPercentageState , percentageState}) {
  


  let theMessage = "";
  const messageEncouragement = {
    
    topScore : "GREAT JOB, ADVENTURER!",
    midScore : "GREAT EFFORT, ADVENTURER!",
    lowScore : "KEEP TRYING: YOU CAN DO IT!"

  };


// leave these calculation here
// set this as state one level higher
// pass it down to this comp. and to circulardeterminate


// calculating the percentage of correct answers (scorePercent) from states: score & clicks
  let scorePercent = Math.floor((score / clicks) * 100)
    if (isNaN(scorePercent)) {
      scorePercent = 0;
    };
  
// attempting to set this state (percentageState) to match the above calculated scorePercent:
  setPercentageState(scorePercent);

//comment

// matching messages to calculated percentages
    if (scorePercent >= 80) {
      theMessage = messageEncouragement.topScore;
    } else if (scorePercent >= 40 && scorePercent <= 79 ) {
      theMessage = messageEncouragement.midScore;
    } else {
      theMessage = messageEncouragement.lowScore;
    };

    return <>
        <LogoutButton/>
        <main className = "main-area">
       <MySvgNight className = 'results-background-image-nighttime'/>
          <h1 className='well-done-h1'>Well Done!</h1>
          <div className="the-card-div">
        <h2 className='h2-score'>You got {score} correct</h2>
        <h3 className='h3-encouragement'>{theMessage}</h3>

        <div className='the-score-badge'>
          <CircularDeterminate score={score} percentageState={percentageState}/>

          <img className='the-banana-itself' src="banana-line-drawing.png" alt="banana" width="50" height="50" style={{zIndex: '1'}}></img>

        </div>

        <div className='score-percentage-container'>

          <h3 className='h3-percentage'>{scorePercent}%</h3>

        </div>



        <div className='button-container-results'>
          <nav>
            <Link to="/expedition">
              <button className = "map-button">Back to Map</button>
            </Link>
          </nav>
          <nav>
            <Link to="/activity-intro">
              <button className = "retry-button">Try Again</button>
            </Link>
          </nav>
          </div>
        </div>
        </main>
      </>
  }