import './NumLine.css'
import { useState, useEffect } from 'react';

export default function NumLine(){
    
    const[answer, setAnswer] = useState("")

    let array = ['2','4','6','8','10','12','14','16','18','20']
    let ranNum = Math.floor(Math.random() * 10);
    
    //USE EFFECT GOES HERE TO PREVENT INFINITE LOOP AND MISMATCH OF ANSWER AND INPUT PLACEMENT!
    useEffect(() => {
        setAnswer(array[ranNum]);
    }, [ranNum])
    
    console.log(`random number is ${array[ranNum]}`)
    let newArray = [...array.slice(0, ranNum),"input",...array.slice(ranNum+1)]
    console.log(newArray);

    function handleClick(){
        const input = document.querySelector(".num-input");
        console.log(input.value)
        console.log(`answer is ${answer}`)
        const inputValue = (input.value);
        if(inputValue === answer){
          console.log('number matches!')
         
        }
        else if (inputValue !== answer){
            console.log('not quite, try again!')
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
        <section className='button-container'>
            <button className='submit-button' onClick = {function(){handleClick()}}>done!</button>
            </section>
    </div>
    
)
}