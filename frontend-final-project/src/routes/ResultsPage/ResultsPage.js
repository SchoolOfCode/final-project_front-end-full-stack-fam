import { Link } from 'react-router-dom';
import './ResultsPage.css';

export default function ResultsPage() {

    return (
      <>
        <main>
          <h2>welcome to the Results Page</h2>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/child">Back to Child Homepage</Link>
        </nav>
        <nav>
          <Link to="/expedition">Back to Expedition</Link>
        </nav>
        <nav>
          <Link to="/activity">Try Activity Again</Link>
        </nav>
      </>
    );
  }