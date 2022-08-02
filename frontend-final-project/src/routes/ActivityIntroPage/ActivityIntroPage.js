import { Link } from 'react-router-dom';
import { ReactComponent as MySvg} from '../../daytime-jungle.svg';
import './ActivityIntroPage.css'

export default function ActivityIntroPage({score, setScore, clicks, setClicks}){

    setScore(0);
    setClicks(0);

// not a comment

return(
         <>
         <MySvg className='activity-intro-background-image-daytime'/>
         <main className= 'main'>

            {/* ACTIVITY INSRUCTIONS WILL GO HERE */}
            
            <h3>
                Complete your next activity before night time falls! <br/>
                Are you ready?
            </h3>

            <section className = "button-container">
                <nav>
                    <Link to="/activity">
                        <button className="start-button">Let's Go!</button>
                    </Link>
                </nav>

                <nav>
                    <Link to="/expedition">
                    <button className='back-button'>Back to the Map</button>
                    </Link>
                </nav>
            </section>
            
        </main>
    </>
)
}