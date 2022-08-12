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
import vector from './images/idk.png'


export default function ExpeditionPage() {


    return (
      
     
      
      <div className = 'Expedition'>


  <img src={vector} className= 'ExpeditionPage'/>
<h1 className = 'expeditionH1'> Addition</h1>
<h2 className = 'expeditionH2'>Are you ready for your next adventure?</h2>
        


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

  <div className ='stop1'>
 

  <nav>
    <Link to="/activity-intro"><button className = 'woodStopButton1'>Home</button></Link>
  </nav>
 </div>
  {/* <div className='thatsaWrap'>
        
<img src={newPath} className = 'newPath'/>      

 
</div>
 


  {/* <div className ='stop2'>
  {/* <img src = {path} className = 'fullPath2'/> */}
  {/* <img src={woodStop} className = 'woodStop2'/>
  <button className = 'woodStopButton2'></button>
  </div> */} 


  {/* <div className ='stop3'> */}
  {/* <img src = {path} className = 'fullPath3'/> */}
  {/* <img src={woodStop} className = 'woodStop3'/>
  <button className = 'woodStopButton3'></button>
  </div> */}


  {/* <div className ='stop4'> */}
  {/* <img src = {path} className = 'fullPath4'/> */}
  {/* <img src={woodStop} className = 'woodStop4'/>
  <button className = 'woodStopButton4'></button>
  </div> */}


  {/* <div className ='stop5'>
  {/* <img src = {path} className = 'fullPath5'/> */}
  {/* <img src={woodStop} className = 'woodStop5'/>
  <button className = 'woodStopButton5'></button>
  </div> */} 

  {/* </div> */} 
  
  
  
 

</div>
      
        

       
    
    );
  }