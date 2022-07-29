import { Link } from 'react-router-dom'
import './ChildHomepage.css'

export default function ChildHomepage() {
    return (
      <>
        <main>
          <h2>Welcome to the Child Homepage</h2>
          <p>
            No parents allowed!
          </p>
        </main>
        <nav>
          <Link to="/login">Back to Log In</Link>
        </nav>
        <nav>
          <Link to="/expedition">Choose Expedition</Link>
        </nav>
      </>
    );
  }