import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './CountdownTimer.css';


const Timer = (props) => {
    const navigate = useNavigate();
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    navigate("/results")
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });



    return (
        <div className='the-countdown-component'>
        { minutes === 0 && seconds === 0
            ? <div className='time-up-text'>TIME'S UP!</div>
            : <div className='countdown-prog-container'>
            <p className='the-countdown-text' > {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p>

            <progress className='progress-countdown' value = {seconds} max="60" id="progressBar"></progress>
            
            </div>
        }
        </div>
    )
}

export default Timer;


    //  : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>