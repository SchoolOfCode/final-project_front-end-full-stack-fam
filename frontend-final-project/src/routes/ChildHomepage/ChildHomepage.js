import { Link } from 'react-router-dom'
import LogoutButton from '../../components/Login/LogoutButton';
import './ChildHomepage.css'

export default function ChildHomepage() {
    return (
      <>
        <LogoutButton/>
        <main>
          <h2>Welcome to the Child Homepage</h2>
          <p>
            No parents allowed!
          </p>
        </main>
        <nav>
          <Link to="/login">
            <button className='back-button'>Back to Login</button>
          </Link>
        </nav>

        <nav>
          <Link to="/expedition">
            <button className='exp-button'>Choose Expedition</button>
          </Link>
        </nav>

      </>
    );
  }