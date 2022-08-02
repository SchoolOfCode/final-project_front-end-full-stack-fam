import { Link } from 'react-router-dom';
import './ActivityIntroPage.css'

export default function ActivityIntroPage({score, setScore, clicks, setClicks}){

    setScore(0);
    setClicks(0);

// comment

return(
         <main className= 'main'>
            <div className= "high-score-display"></div>
            {/* ACTIVITY INSRUCTIONS WILL GO HERE */}
            <h3>Ready?</h3>

            <nav>
                <Link to="/activity">
                    <button className="start-button">Yes!</button>
                </Link>
            </nav>

            <nav>
                <Link to="/expedition">
                <button className='back-button'>Back to the Map</button>
                </Link>
            </nav>
            
        </main>

)
}