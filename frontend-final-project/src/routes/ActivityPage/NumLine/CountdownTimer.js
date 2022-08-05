import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


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
        <div>
        { minutes === 0 && seconds === 0
            ? <div>TIME'S UP!</div>
            : <div>
            <progress value = {seconds} max="60" id="progressBar"></progress>
            <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
            </div>
        }
        </div>
    )
}

export default Timer;


    //  : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>