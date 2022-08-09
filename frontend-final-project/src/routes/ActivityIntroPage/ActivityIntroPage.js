import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Login/LogoutButton';
import { ReactComponent as MySvg} from '../../daytime-jungle.svg';
import './ActivityIntroPage.css'

export default function ActivityIntroPage({score, setScore, clicks, setClicks}){

    setScore(0);
    setClicks(0);



return(
        <>   
        <LogoutButton/>
         <MySvg className='activity-intro-background-image-daytime'/>
         <main className= 'main-area'>


            <h1 className='activity-intro-h1'>Adventure #1</h1>
            <div className='the-card-div-intro'>
            <h3 className='activity-intro-h3'>
                Collect as much fruit as you can before night time! </h3>
            <p className='activity-intro-descr'> * this is the description of the activity / maths stuff * </p>
            <h3 className='activity-intro-ready'>Are you ready?</h3>
            <section className = "the-button-container">
                <nav>
                    <Link to="/activity">
                        <button className="start-button">Yes!</button>
                    </Link>
                </nav>

                <nav>
                    <Link to="/expedition">
                        <button className='back-button'>Back to Map</button>
                    </Link>
                </nav>
            </section>
            </div>
            
        </main>
        </> 
)
}