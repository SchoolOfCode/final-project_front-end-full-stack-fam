import { Link } from 'react-router-dom'
import './ExpeditionPage.css'

export default function ExpeditionPage() {

    return (
      <>
        <main>
          <h2>Welcome to Expedition Page</h2>
        </main>
        <nav>
          <Link to="/child">Back to Child Homepage</Link>
        </nav>
        <nav>
          <Link to="/activity-intro">Go to Activity</Link>
        </nav>
      </>
    );
  }