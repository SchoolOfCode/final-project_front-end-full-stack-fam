import { Link } from 'react-router-dom'
import LogoutButton from '../../components/Login/LogoutButton';
import './ExpeditionPage.css'
import './homeHut.css'
import button from './images/homeHut.png'
import woodStop from './images/woodStop.PNG'
import './woodStop.css'
import leftFoot from './images/leftFootCol.png'
import rightFoot from './images/rightFootCol.png'
import path from './images/fullPath.png'



export default function ExpeditionPage() {


    return (
     
      <div className = 'expeditionPage'>
      <div className= 'Expedition'>

<h1 className = 'expeditionH1'>Addition</h1>
<h2 className = 'expeditionH2'>Are you ready for your next adventure?</h2>
        
  
  <img src={button} className = 'homeHutButton'/>


        <nav>
          <Link to="/child"><button className = 'ChildHomeButton'>Home</button></Link>
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
  <img src={rightFoot} />
  
</div>
  </div>

 
  
        <img src={woodStop} className = 'woodStop2'/>
        <img src={woodStop} className = 'woodStop3'/>
        <img src={woodStop} className = 'woodStop4'/>
        <img src={woodStop} className = 'woodStop5'/>
        
        
        
      
        
        <button className = 'woodStopButton2'></button>
        <button className = 'woodStopButton3'></button>
        <button className = 'woodStopButton4'></button>
        <button className = 'woodStopButton5'></button>
       

<img src = {path} className = 'fullPath1'/>
<img src = {path} className = 'fullPath2'/>
<img src = {path} className = 'fullPath3'/>
<img src = {path} className = 'fullPath4'/>
<img src = {path} className = 'fullPath5'/>

  
  <img src={woodStop} className = 'woodStop1'/>
  <nav>
 
          <Link to="/activity-intro"><button className = 'woodStopButton1'>Home</button></Link>
        </nav>
        
        
        

        <img src={woodStop} className = 'woodStop2'/>
        <img src={woodStop} className = 'woodStop3'/>
        <img src={woodStop} className = 'woodStop4'/>
        <img src={woodStop} className = 'woodStop5'/>
        
        
        
      
        
        <button className = 'woodStopButton2'></button>
        <button className = 'woodStopButton3'></button>
        <button className = 'woodStopButton4'></button>
        <button className = 'woodStopButton5'></button>
       

<img src = {path} className = 'fullPath1'/>
<img src = {path} className = 'fullPath2'/>
<img src = {path} className = 'fullPath3'/>
<img src = {path} className = 'fullPath4'/>
<img src = {path} className = 'fullPath5'/>

        
        
</div>    
</div>
       
       
    
    );
  }