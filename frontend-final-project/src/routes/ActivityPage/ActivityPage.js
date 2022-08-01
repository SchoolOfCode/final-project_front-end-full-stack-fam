import { Link } from 'react-router-dom';
import './ActivityPage.css';

export default function ActivityPage() {
    return (
      <>
        <main>
          <h2>Welcome to the Activity Page</h2>
          <p>
            No parents allowed!
          </p>
        </main>
        

        <div className='num-line-container'>
            <section className='num-grid'>
                <p>2</p>
                <p>4</p>
                <p>6</p>
                <p>8</p>
                <p>10</p>
                <p>12</p>
                <p>14</p>
                <p>16</p>
                <p>18</p>
                <p>20</p>
            </section>
    
            <section className='num-line'></section>
        </div>





        <nav>
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
        </nav>
      </>
    );
  }