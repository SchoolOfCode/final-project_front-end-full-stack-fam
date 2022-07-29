import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {

    return (
    <>
     <nav>
          <Link to="/login">Back to Log In</Link>
        </nav>
    </>
    );
  }