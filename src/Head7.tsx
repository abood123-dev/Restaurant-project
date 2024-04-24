import React from "react";
import './Head7.css';
import chef1 from './images/Chef card.png';
import chef2 from './images/Card 2.png';
import chef3 from './images/Card 3.png';
import chef4 from './images/Card 4.png';
import test1 from './images/Rectangle 8934.png';
import test2 from './images/Ellipse 6.png';
import quote from './images/Quotes.png';
import stars from './images/Star.png';
import Loading from './images/Dot.png';
import bigpic from './images/unsplash_E6DsqnZbZ4o.png';
import play from './images/Play.png';
import { NavLink } from "react-router-dom";
const Head7=()=>
{
return(
<>
<div className="chefs">
    Chefs
</div>
<div className="meet">
    Meet Our Chefs
</div>
<div className="imgch">
    <img src={chef1}/>
    <img src={chef2}/>
    <img src={chef3}/>
    <img src={chef4}/>
</div>
<div className="morechefs">
   <NavLink to="Chefs"><button className="chefsbtn" >See more</button></NavLink> 
</div>
<div className="test">Testimonals</div>
<div className="saying">What our clients are saying</div>
<div>
    <img className="whitepage" src={test1}/>
    <img className="profilepic" src={test2}/>
    <img className="quotes" src={quote}/>
    <p className="test3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    <img className="stars" src={stars}/> <img className="stars11" src={stars}/> <img className="stars22" src={stars}/> <img className="stars33" src={stars}/> <img className="stars44" src={stars}/>
    <p className="alamin">Alamin Hasan</p>
    <p className="spec">Food Specialist</p>

</div>
<img className="Loading" src={Loading}/>
<img className="bigpic" src={bigpic}/>
<div className="inside">
    <div className="active">Restaurant active process</div>
    <div className="document">We Document Every Food Bean Process Until It is saved</div>
    <div className="lolo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </div>
    <div className="row">
     <NavLink to="/Bout"> <button className="btn3">See more</button></NavLink>
      <img src={play}/>
    <a href="https://www.youtube.com"> <p className="man">Play video</p></a> 
    </div> 
</div>

</>
)
}
export default Head7