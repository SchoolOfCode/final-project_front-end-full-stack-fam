// import { Link } from 'react-router-dom';
import './ActivityPage.css';
import NumLine from './NumLine/NumLine';

export default function ActivityPage() {
    

  return (
      <>
        <main className ="main">
        <div className='num-line-container'>
            <NumLine/>
        </div>
        </main>
        {/* <nav>
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
        </nav> */}
      </>
    );
  }