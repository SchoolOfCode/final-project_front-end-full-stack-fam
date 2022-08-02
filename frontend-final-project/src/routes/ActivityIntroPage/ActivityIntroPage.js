import { Link } from 'react-router-dom';
import './ActivityIntroPage.css'

export default function ActivityIntroPage({score, setScore, clicks, setClicks}){

    setScore(0);
    setClicks(0);

    // instructions for child activity can go here


return(
         <main className= 'main'>
            <div className= "wheel-thing"></div>
            
            <nav>
                <Link to="/activity">
                    <button className="start-button">Ready?</button>
                </Link>
            </nav>
            
        </main>

)
}