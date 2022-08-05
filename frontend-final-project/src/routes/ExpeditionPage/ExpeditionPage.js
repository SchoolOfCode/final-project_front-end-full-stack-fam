import { Link } from 'react-router-dom'
import './ExpeditionPage.css'
import './homeWood.css'
import button from './homeWood.PNG'
import woodStop from './woodStop.PNG'
import './woodStop.css'
import rightFoot from './rightFootCol.png'
import leftFoot from './leftFootCol.png'



export default function ExpeditionPage() {


    return (
     
      <div>
      <div className= 'Expedition'>

<h1>Addition</h1>
<h2>Are you ready for your next adventure?</h2>
        
  <div  className = 'Button-container'>
  <img src={button} className = 'button'/>


        <nav>
          <Link to="/child"><button className = 'ChildHomeButton'>Home</button></Link>
        </nav>

    
    
   
    




          
<div class="wrap">
<div class="upper">
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  
</div>
<div class="lower">
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  
</div>
  </div>

  <div class="wrap2">
<div class="upper2">
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  
</div>
<div class="lower2">
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  
</div>
  </div>

  <div class="wrap3">
<div class="upper3">
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  
</div>
<div class="lower3">
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  
</div>
  </div>

        <img src={woodStop} className = 'woodStop1'/>
        <button className = 'woodStopButton1'></button>
        

        <img src={woodStop} className = 'woodStop2'/>
        <img src={woodStop} className = 'woodStop3'/>
        <img src={woodStop} className = 'woodStop4'/>
        <img src={woodStop} className = 'woodStop5'/>
        
        
        
      
        
        <button oclassName = 'woodStopButton2'></button>
        <button className = 'woodStopButton3'></button>
        <button className = 'woodStopButton4'></button>
        <button className = 'woodStopButton5'></button>
       



        
        
        
</div>
        </div>
        </div>
    
    );
  }