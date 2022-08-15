import { Link } from 'react-router-dom'
import LogoutButton from '../../components/Login/LogoutButton';
import './ExpeditionPage.css'
import './homeHut.css'
import homeHut from './images/homeHut.png'
import woodStop from './images/woodStop.PNG'
import './woodStop.css'
import leftFoot from './images/leftFootCol.png'
import rightFoot from './images/rightFootCol.png'

import vector from './images/idk.png'


export default function ExpeditionPage() {


    return (
      
     
      
 <div className = 'Expedition'>
 <img src={vector} className= 'ExpeditionPage'/>
   <h1 className = 'expeditionH1'> Addition</h1>
   <h2 className = 'expeditionH2'>Are you ready for your next adventure?</h2>
  

<nav>
    <Link to="/child"><button className = 'ChildHomeButton'> <img src = {homeHut} className= 'hut'></img></button></Link>
</nav>
                
 <div className="wrap">
<div className="upper">
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  <img src={leftFoot} />
  
</div>
<div className="lower">
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
  <img src={rightFoot} />
 
  
</div>
  </div> 

  <div className ='stop1'>
 

  <nav>
    <Link to="/activity-intro"><button className = 'woodStopButton1'> <img src = {woodStop} className = 'woodButton'></img>Home</button></Link>
  </nav>
  <img src = {woodStop} className = 'woodButton2'></img>
  <img src = {woodStop} className = 'woodButton3'></img>
  <img src = {woodStop} className = 'woodButton4'></img>
  <img src = {woodStop} className = 'woodButton5'></img>


 </div>
</div>
           
    
    );
  }