import './NumLine.css'
import { useState, useEffect } from 'react';
import Timer from './CountdownTimer';

export default function NumLine({score, setScore, clicks, setClicks}){
    
    //SETTING OUR DEFAULT STATE
    const[answer, setAnswer] = useState("");
    const [prevAnsw, setPrevAnsw] = useState("");
    // const [score, setScore] = useState(0);
    // const [clicks, setClicks] = useState(0);

    //ASSIGNING ARRAY
    let array = ['2','4','6','8','10','12','14','16','18','20']
    let ranNum = Math.floor(Math.random() * 10)

    //THIS CHECKS THE NUMBER DOESNT REPEAT TWO TIMES IN A ROW
    function checkRanNum() {
        console.log(`RAN NUM: ${ranNum} PREV ANSWER: ${prevAnsw}`)
        while (ranNum === prevAnsw){
            console.log("! ! REPEAT DETECTED: regenerating ranNum. . . ! !")
        ranNum = Math.floor(Math.random() * 10)
        };
        return ranNum
    }

        checkRanNum();

    
    //USE EFFECT GOES HERE TO PREVENT INFINITE LOOP AND MISMATCH OF ANSWER AND INPUT PLACEMENT!
    useEffect(() => {
        setAnswer(array[ranNum]);
    // eslint-disable-next-line
    }, [ranNum])
    
    //IMMUTABLE CHANGING OF ARRAY TO RENDER INPUT FIELD EACH TIME
    console.log(`random number is ${array[ranNum]}`)
    let newArray = [...array.slice(0, ranNum),"input",...array.slice(ranNum+1)]
    console.log(newArray);

    //ON BUTTON CLICK, CHECKS IF THE INPUT FIELD MATCHES THE RIGHT ANSWER,
    //IF THE SCORE IS CORRECT, THE SCORE IS INCREMENTED, AND THE ANSWER IS RESET
    function handleClick(){
        const input = document.querySelector(".num-input");
        console.log(input.value)
        console.log(`answer is ${answer}`)
        const inputValue = (input.value);
        if(inputValue === answer){
          console.log('number matches!');
            setClicks(clicks +1);
            setScore(score + 1);
            setPrevAnsw(ranNum);
            setAnswer('');
        }
        else if (inputValue !== answer){
            console.log('not quite, try again!')
            setClicks(clicks +1)
        }
      }



return (
    <div>
    <section className= "num-grid">
        {newArray.map(function(item){
            if( item === "input" ){
                return <input className="num-input" type='text' maxLength={2}></input>
            }
            else{
                return <p className="num-text">{item}</p>
            }
        })}
    </section>
            <p className = "score">right answers: {score}</p>
            <p>number of questions: {clicks}</p>
            <Timer initialMinute = {0} initialSeconds = {60}/>

        <section className='button-container'>
            <button className='submit-button' onClick = {function(){handleClick()}}>done!</button>
            </section>
    </div>
    
)
}