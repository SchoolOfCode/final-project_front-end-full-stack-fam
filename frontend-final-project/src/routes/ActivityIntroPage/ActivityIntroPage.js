import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Login/LogoutButton';
import { ReactComponent as MySvg} from '../../daytime-jungle.svg';
import './ActivityIntroPage.css'



export default function ActivityIntroPage({score, setScore, clicks, setClicks , mismatch , setMismatch}){

    setScore(0);
    setClicks(0);
    setMismatch(0);

    const descr1 = "Take a look at this number line:"
    
    const descr2 = "- 2 - 4 - 6 - 8 - 10 - 12 - 14 - 16 - 18 - 20 -"

    const descr3 = "YOUR CHALLENGE: some of these numbers will be missing; can you fill them in?"



return(
        <>   
        <LogoutButton/>
         <MySvg className='activity-intro-background-image-daytime'/>
         <main className= 'main-area'>


            <div className='the-title-text-area'>

                <p className='the-activity-number'>Adventure #1 :</p>
                <h1 className='activity-intro-h1'>Number Line</h1>

            </div>    


            <div className='the-card-div-intro'>
            
                <h3 className='activity-intro-h3'>
                    Collect as much fruit as you can before night time! </h3>
                <p className='activity-intro-descr'>{descr1}</p>
                <p className='activity-intro-descr'>{descr2}</p>
                <p className='activity-intro-descr'>{descr3}</p>
                <h3 className='activity-intro-ready'>Are you ready?</h3>

                <section className = "the-button-container">
                    <nav>
                        <Link to="/activity" style={{textDecoration: "none"}} >
                            <button className="start-button-intro">Yes!</button>
                        </Link>
                    </nav>

                    <nav>
                        <Link to="/expedition" style={{textDecoration: "none"}} >
                            <button className='back-button-intro'>Back to Map</button>
                        </Link>
                    </nav>

                </section>

            </div>
            
        </main>
        </> 
)
}