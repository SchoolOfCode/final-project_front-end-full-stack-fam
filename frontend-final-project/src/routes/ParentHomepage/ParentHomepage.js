import { Link } from 'react-router-dom'
import './ParentHomepage.css'

export default function ParentHomepage() {
    return (
      <>
        <main>
          <h2>Welcome to the Parent Homepage</h2>
          <p>
            No children allowed!
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/login">Back to Log In</Link>
        </nav>
      </>
    );
  }