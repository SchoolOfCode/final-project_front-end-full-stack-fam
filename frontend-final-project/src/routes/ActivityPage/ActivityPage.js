import { Link } from 'react-router-dom';
import './ActivityPage.css';

export default function ActivityPage() {
    return (
      <>
        <main>
          <h2>Welcome to the Activity Page</h2>
          <p>
            No parents allowed!
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
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
        </nav>
      </>
    );
  }