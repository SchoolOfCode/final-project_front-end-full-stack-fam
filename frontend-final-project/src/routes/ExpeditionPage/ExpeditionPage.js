import { Link } from 'react-router-dom'
import LogoutButton from '../../components/Login/LogoutButton';
import './ExpeditionPage.css'

export default function ExpeditionPage() {

    return (
      <>
        <LogoutButton/>
        <main>
          <h2>Welcome to Expedition Page</h2>
        </main>
        <nav>
          <Link to="/child">
            <button className='back-button'>Back to Child Homepage</button>
            </Link>
        </nav>


        <nav>
          <Link to="/activity-intro">
            <button className='activity-button'>Start Activity</button>
          </Link>
        </nav>


      </>
    );
  }