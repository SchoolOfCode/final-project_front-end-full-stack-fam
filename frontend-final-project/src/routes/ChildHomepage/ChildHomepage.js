import { Link } from 'react-router-dom'
import LogoutButton from '../../components/Login/LogoutButton';
import './ChildHomepage.css'
import { ReactComponent as MySvg} from '../../daytime-jungle.svg';

export default function ChildHomepage() {
    return <>
      <LogoutButton/>
      <div className= "page-container">
        <MySvg className='background-image-daytime'/>
        <main className= "child-homepage">
          <h2>Welcome to the Child Homepage</h2>
          <p>
            No parents allowed!
          </p>
        <nav>
          <Link to="/login">
            <button className='back-button'>Back to Login</button>
          </Link>
        </nav>

        <nav>
          <Link to="/expedition">
            <button className='exp-button'>Choose Expedition</button>
          </Link>
        </nav>
        </main>

      </div>
      </>
  }