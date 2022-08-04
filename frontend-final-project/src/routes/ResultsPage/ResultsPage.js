import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Login/LogoutButton';
import './ResultsPage.css';
import { ReactComponent as MySvgNight} from '../../nighttime-jungle.svg';
import CircularDeterminate from '../CircularDeterminate';

export default function ResultsPage({score, clicks}) {
  
  let theMessage = "";
  const messageEncouragement = {
    
    topScore : "GREAT JOB, ADVENTURER!",
    midScore : "GREAT EFFORT, ADVENTURER!",
    lowScore : "KEEP TRYING: YOU CAN DO IT!"

  };

    let scorePercent = Math.floor((score / clicks) * 100)
    if (isNaN(scorePercent)) {
      scorePercent = 0;
    };

    if (scorePercent >= 80) {
      theMessage = messageEncouragement.topScore;
    } else if (scorePercent >= 40 && scorePercent <= 79 ) {
      theMessage = messageEncouragement.midScore;
    } else {
      theMessage = messageEncouragement.lowScore;
    };

    return <>
        <LogoutButton/>
        <main className = "main">
       <MySvgNight className = 'results-background-image-nighttime'/>
          <h1 className='heading'>Well Done!</h1>
        <h3 className='h3-score'>Your score is {score}!</h3>
        <h3 className='h3-percentage'>You got {scorePercent}% correct</h3>
        <h3 className='h3-encouragement'>{theMessage}</h3>
        <CircularDeterminate score={score}/>

        <div className='button-container'>
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
        </main>
      </>
  }