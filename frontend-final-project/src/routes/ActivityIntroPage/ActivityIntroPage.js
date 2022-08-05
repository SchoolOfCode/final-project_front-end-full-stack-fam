import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Login/LogoutButton';
import { ReactComponent as MySvg} from '../../daytime-jungle.svg';
import './ActivityIntroPage.css'

export default function ActivityIntroPage({score, setScore, clicks, setClicks}){

    setScore(0);
    setClicks(0);

// not a comment

return(
        <>   
        <LogoutButton/>
         <MySvg className='activity-intro-background-image-daytime'/>
         <main className= 'main'>

            {/* ACTIVITY INSRUCTIONS WILL GO HERE */}
            
            <h3>
                Collect as many bananas as you can before night time! <br/>
                Are you ready?
            </h3>

            <section className = "button-container">
                <nav>
                    <Link to="/activity">
                        <button className="start-button">YES</button>
                    </Link>
                </nav>

                <nav>
                    <Link to="/expedition">
                    <button className='back-button'>BACK TO MAP</button>
                    </Link>
                </nav>
            </section>
            
        </main>
        </> 
)
}