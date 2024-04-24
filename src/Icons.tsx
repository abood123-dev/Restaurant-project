import React from "react";
import service1 from './images/Group (4).png';
import service2 from './images/Group (3).png';
import service3 from './images/Group (5).png';
import service4 from './images/Group (2).png';
import './Head4.css';
function Icons() {
  return (
      <div className="icons">
     <div className="icon">
     <img className="service" src={service1}/>
     <div className="bro">Years of experienced</div>
     <div className="bro">30+</div>    
     </div>
     <div className="icon">
     <img className="service" src={service2}/>
     <div className="bro">Items of food</div>
     <div className="bro">320</div>
     </div>
     <div className="icon">
     <img className="service" src={service3}/>
     <div className="bro" >Happy customers</div>
     <div className="bro">220</div>     
     </div>
     <div className="icon">
      <img className="service" src={service4}/>
      <div className="bro">Professional chefs</div>
      <div className="bro">420</div>    
     </div>

</div>

  )
}

export default Icons
