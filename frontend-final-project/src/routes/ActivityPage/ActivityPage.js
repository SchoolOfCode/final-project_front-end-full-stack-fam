// import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Login/LogoutButton';
import './ActivityPage.css';
import NumLine from './NumLine/NumLine';
import { ReactComponent as MySvgDay} from '../../daytime-jungle.svg';
import { ReactComponent as MySvgNight} from '../../nighttime-jungle.svg';

export default function ActivityPage({score, setScore, clicks ,setClicks}) {
    
// comment
  return (
      <>
        <LogoutButton/>
        <MySvgDay className='activity-background-image-daytime'/>
        <MySvgNight className='activity-background-image-nighttime'/>
        <main className ="main">
        <div className='num-line-container'>
            <NumLine score = {score} setScore = {setScore} clicks = {clicks} setClicks = {setClicks}/>
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