import { Link } from 'react-router-dom';
import './ResultsPage.css';

export default function ResultsPage({score, clicks}) {

    return (
      <>
        <main>
          <h2>welcome to the Results Page</h2>
        </main>
        <h3>Your score is {score}!</h3>
        <h3>You got {Math.floor((score / clicks) * 100)}% correct!</h3>
        <nav>
          <Link to="/expedition">Go back to the Map</Link>
        </nav>
        <nav>
          <Link to="/activity">Try Activity Again</Link>
        </nav>
      </>
    );
  }