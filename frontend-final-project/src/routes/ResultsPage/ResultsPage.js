import { Link } from 'react-router-dom';
import './ResultsPage.css';
import { ReactComponent as MySvgNight} from '../../nighttime-jungle.svg';

export default function ResultsPage({score, clicks}) {

    return (
      <>
       <MySvgNight className = 'results-background-image-nighttime'/>

        <main className = "main">
          <h2>Well Done!</h2>
        <h3>Your score is {score}!</h3>
        <h3>You got {Math.floor((score / clicks) * 100)}% correct!</h3>
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