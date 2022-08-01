import { Link } from 'react-router-dom';
import './ActivityPage.css';
import NumLine from './NumLine/NumLine';

export default function ActivityPage() {
    

  return (
      <>
        {/* <main>
          <h2>Welcome to the Activity Page</h2>
          <p>
            No parents allowed!
          </p>
        </main> */}
        
  
        <main className ="main">
        <div className='num-line-container'>
            {/* <section className='num-grid'>
                <p className="num-text">2</p>
                <p className="num-text">4</p>
                <p className="num-text">6</p>
                <p className="num-text">8</p>
                <input className="num-input" type='text' onChange={handleChange} maxLength={2}></input>
                <p className="num-text">12</p>
                <p className="num-text">14</p>
                <p className="num-text">16</p>
                <p className="num-text">18</p>
                <p className="num-text">20</p>
              
             
            </section> */}
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