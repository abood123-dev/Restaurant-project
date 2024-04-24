import React from "react";
import food1 from './images/unsplash_lP5MCM6nZ5A.png';
import food2 from './images/unsplash_dphM2U1xq0U.png';
import food3 from './images/unsplash_CLMpC9UhyTo.png';
import food4 from './images/unsplash_-GFCYhoRe48.png';
import food5 from './images/unsplash_tzl1UCXg5Es.png';
import food6 from './images/unsplash_mmnKI8kMxpc.png';
import category1 from './images/Hamburger.png';
import category2 from './images/Cookie.png';
import category3 from './images/Wine.png';
import service1 from './images/Group (4).png';
import service2 from './images/Group (3).png';
import service3 from './images/Group (5).png';
import service4 from './images/Group (2).png';
import './Head4.css';
const Head4=()=>
{
return(
<>
<div className="hard">
     <div className="foodimg">
     <div className="two">   
     <img className="food1" src={food1}/>
     <img className="food2" src={food2}/>
     </div>
     <div className="four">
     <img className="food3" src={food3}/>
     <img className="food4" src={food4}/>
     <img className="food5" src={food5}/>
     <img className="food6" src={food6}/>
     </div>
     </div>
     <div className="hard2">

          <div className="why">
           Why choose us
          </div>

          <div className="extra">
        <span className="ex">Ex</span>ta ordinary taste
          And Experienced 
          </div>

          <div className="lol">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </div>
          
         <div className="categorys">
          <div className="moom">
           <img className="wow" src={category1}/>
           <p className="dinner">Fast food</p>
          </div>
          <div className="moom">
          <img className="wow" src={category2}/>
          <p className="dinner">Lunch</p>
          </div>
          <div className="moom">
           <img className="wow" src={category3}/>
           <p className="dinner">Dinner</p>
          </div>
         </div>
         <div className="white">
         <div className="plus">30+   </div><div className="years">Years of Experienced</div>
         </div>

     </div>




</div>


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


</>
)    
}
export default Head4