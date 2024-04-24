import React from "react"
import './index.d'
import first from './images/unsplash_fdlZBWIP0aM.png';
import second from './images/unsplash_jpkfc5_d-DI.png';
import third from './images/unsplash_mAQZ3X_8_l0.png';
import './Head3.css'
import fourth from './images/unsplash_-lHZUkiWM74.png';
import fifth from './images/unsplash_dphM2U1xq0U.png';
import sixth from './images/unsplash_q54Oxq44MZs.png';
import seventh from './images/unsplash_MRHyv-hHxgk.png';
import { NavLink } from "react-router-dom";
const Head3=()=>
{
return(
<>
<div className="grid">
<div className="desc1">
<p className="about">about us</p>
<p className="create"> <span className="wee">We</span> Create the best
foody product
</p>
<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
<p className="text"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
<p className="text"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<NavLink to="/Bout"><button className="read">Read more</button></NavLink> 
</div>
<div className="images">
<img className="firstimg" src={first}/>
<div className="two">
<img className="secondimg" src={second}/>
<img className="thirdimg" src={third}/>
</div>
</div>
</div>
<div className="quality">Food quality</div>
<div className="choose" ><span className="ch">Ch</span>oose Food Item</div>
<div className="four">
    <img className="foods" src={fourth}/>
    <img className="foods" src={fifth}/>
    <img className="foods" src={sixth}/>
    <img className="foods" src={seventh}/>
</div>
</>
)
}
export default Head3