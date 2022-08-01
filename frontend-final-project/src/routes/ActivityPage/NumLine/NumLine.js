import './NumLine.css'
import { useState, useEffect } from 'react';

export default function NumLine(){
    
    const[answer, setAnswer] = useState("")
    
    let array = ['2','4','6','8','10','12','14','16','18','20']

    function setArray(){
    let ranNum = Math.floor(Math.random() * 10);
    setAnswer(array[ranNum]);
    console.log(`the answer is ${answer}`)
    array[ranNum] = "input";
    }

    useEffect(()=> {setArray()})
    

    function handleClick(){
        const input = document.querySelector(".num-input");
        console.log(input.value)
        const inputValue = (input.value);
        if(inputValue === answer){
          console.log('number matches!')
          setArray();
        }
        else if (inputValue !== answer){
            console.log('not quite, try again!')
        }
      }

return (
    <div>
    <section className= "num-grid">
        {array.map(function(item){
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