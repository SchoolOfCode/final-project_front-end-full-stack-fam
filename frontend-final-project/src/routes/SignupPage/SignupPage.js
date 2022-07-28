import { Link } from 'react-router-dom'
import './SignupPage.css'

export default function SignupPage() {

    return (
      <>
        <main>
          <h2>welcome to the Signup Page</h2>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/child">Log in as Child</Link>
        </nav>
        <nav>
          <Link to="/parent">Log in as Parent</Link>
        </nav>
      </>
    );
  }