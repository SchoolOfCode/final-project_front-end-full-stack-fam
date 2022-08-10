import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Login/LogoutButton';
import './ResultsPage.css';
import { ReactComponent as MySvgNight} from '../../nighttime-jungle.svg';
import CircularDeterminate from '../CircularDeterminate';
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function ResultsPage({score, clicks, setPercentageState , percentageState, childData, setChildData}) {
  //NAS AND NOAH PUT THIS HERE
  const {user, isAuthenticated} = useAuth0()

  let theMessage = "";
  const messageEncouragement = {
    
    topScore : "GREAT JOB, ADVENTURER!",
    midScore : "GREAT EFFORT, ADVENTURER!",
    lowScore : "KEEP TRYING: YOU CAN DO IT!"

  };


// leave these calculation here
// set this as state one level higher
// pass it down to this comp. and to circulardeterminate


// calculating the percentage of correct answers (scorePercent) from states: score & clicks
  let scorePercent = Math.floor((score / clicks) * 100)
    if (isNaN(scorePercent)) {
      scorePercent = 0;
    };
  
// attempting to set this state (percentageState) to match the above calculated scorePercent:
  setPercentageState(scorePercent);

//comment

// matching messages to calculated percentages
    if (scorePercent >= 80) {
      theMessage = messageEncouragement.topScore;
    } else if (scorePercent >= 40 && scorePercent <= 79 ) {
      theMessage = messageEncouragement.midScore;
    } else {
      theMessage = messageEncouragement.lowScore;
    };

    //Nas n Noah's Post Request Corner 

    
    async function getChildDataByEmail() {
      let response = await fetch(`https://fullstack-fam.herokuapp.com/parent/search/?email=${user.email}`);
      let data = await response.json();
      setChildData(data.payload[0].name)
      console.log(data.payload[0].name)
    }
    
    useEffect(() => {
      if(isAuthenticated){
        console.log(user.email)
        getChildDataByEmail();
      }
    }, []);
  
    const child = childData

    // async function postResults(){

    //   let response = await fetch("https://fullstack-fam.herokuapp.com/child", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(  {
    //       name: "lilly",
    //       scoreone: {score},
    //       timecompleted: '00:00:00',
    //       datecompleted: '2011-05-03 '
    //   },),
    //   });

    //   const data = await response.json();
    //   const info = data.payload[0].student_id;
    //   console.log("sucess!")

    // }

    return <>
        <LogoutButton/>
        <main className = "main">
       <MySvgNight className = 'results-background-image-nighttime'/>
          <h1 className='heading'>Well Done!</h1>
          <div className="the-card-div">
        <h2 className='h2-score'>You got {score} correct</h2>
        <h3 className='h3-encouragement'>{theMessage}</h3>
        <CircularDeterminate score={score} percentageState={percentageState}/>


        <h3 className='h3-percentage'>{scorePercent}%</h3>
        <img src="banana-line-drawing.png" alt="banana" width="50" height="50" style={{zIndex: '1'}}></img>

        <div className='button-container'>
          <nav>
            <Link to="/expedition">
              <button className = "map-button">Back to Map</button>
            </Link>
          </nav>
          <nav>
            <Link to="/activity-intro">
              <button className = "retry-button">Try Again {child}</button>
            </Link>
          </nav>
          </div>
        </div>
        </main>
      </>
  }