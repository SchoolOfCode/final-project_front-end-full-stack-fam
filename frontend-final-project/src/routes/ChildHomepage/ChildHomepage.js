import { Link } from 'react-router-dom';
import { ReactComponent as MySvg} from '../../daytime-jungle.svg';
import './ChildHomepage.css';

export default function ChildHomepage() {
    return (
      <>
        <main>
          <MySvg className='background-image-daytime'/>
          <h2>Welcome to the Child Homepage</h2>
          <p>
            No parents allowed!
          </p>
        </main>
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

      </>
    );
  }