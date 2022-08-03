import { Link } from 'react-router-dom';
import './ResultsPage.css';
import { ReactComponent as MySvgNight} from '../../nighttime-jungle.svg';

export default function ResultsPage({score, clicks}) {


    let scorePercent = Math.floor((score / clicks) * 100)
    if (isNaN(scorePercent)) {
      scorePercent = 0;
    };

    return (
      <>
       <MySvgNight className = 'results-background-image-nighttime'/>

        <main className = "main">
          <h2 className='heading'>Well Done!</h2>
        <h3 className='h3-score'>Your score is {score}!</h3>
        <h3 className='h3-percentage'>You got {scorePercent}% correct</h3>
        <h3>GREAT JOB, ADVENTURER!</h3>
        <nav>
          <Link to="/expedition">
            <button className = "map-button">Back To Map</button>
          </Link>
        </nav>
        <nav>
          <Link to="/activity-intro">
            <button className = "retry-button">Try Again</button>
          </Link>
        </nav>
        </main>
      </>
    );
  }