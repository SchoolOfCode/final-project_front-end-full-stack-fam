import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {

    return (
      <>
        <main>
          <h2>Welcome to Landing Page</h2>
          <p>Users will arrive at this page first</p>
        </main>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
        <nav>
          <Link to="/signup">Signup</Link>
        </nav>
      </>
    );
  }