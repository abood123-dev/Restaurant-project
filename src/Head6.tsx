import React from "react";
import './Head6.css'
import bigph from './images/unsplash_Lv174o7fn7Y.png';
import bigtwo from './images/unsplash_OFismyezPnY.png'
import bigthree from  './images/unsplash_-GFCYhoRe48 (1).png';
import bigfour from './images/unsplash_Yr4n8O_3UPc.png' ;
import bigfive from './images/unsplash_W9OKrxBqiZA.png';
import bigsix from './images/unsplash_ZqREbckCRQA.png';
import bigseven from './images/unsplash_cLpdEA23Z44.png';
import bigeight from './images/unsplash_mAQZ3X_8_l0 (1).png';
import bignine from './images/unsplash_dphM2U1xq0U (1).png';
import { NavLink, Outlet } from "react-router-dom";
const Head6=()=>
{
return(
<>
<div className="grid5">
 <div className="bighh">
    <img src={bigph}/>
 </div>
 <div>
    <div className="blah">
     <div>
      <img src={bigtwo}/>
      </div>
      <div>
     <p className="title">Lettuce Leaf</p>
     <p className="nothing">Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className="price">12.5$</p>
     </div>
    </div>
    <div className="blah">
    <div><img src={bigthree}/></div>
    <div>
     <p className="title">Fresh Breakfast</p>
     <p className="nothing">Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className="price">14.5$</p>
     </div>
    </div>
    <div className="blah">
    <div><img src={bigfour}/></div>
    <div>
     <p className="title">Mild Butter</p>
     <p className="nothing">Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className="price">12.5$</p>
     </div>
    </div>
    <div className="blah">
    <div><img src={bigfive}/></div>
    <div>
     <p className="title">Fresh Bread</p>
     <p className="nothing">Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className="price">12.5$</p>
     </div>
    </div>
  </div>  
    <div>
    <div className="blah">
     <div>
      <img src={bigsix}/>
      </div>
      <div>
     <p className="title">Glow Cheese</p>
     <p className="nothing">Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className="price">12.5$</p>
     </div>
    </div>
    <div className="blah">
    <div><img src={bigseven}/></div>
    <div>
     <p className="title">Italian Pizza</p>
     <p className="nothing">Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className="price">14.5$</p>
     </div>
    </div>
    <div className="blah">
    <div><img src={bigeight}/></div>
    <div>
     <p className="title">Sllice Beef</p>
     <p className="nothing">Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className="price">12.5$</p>
     </div>
    </div>
    <div className="blah">
    <div><img src={bignine}/></div>
    <div>
     <p className="title">Mushaom Pizza</p>
     <p className="nothing">Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className="price">12.5$</p>
     </div>
    </div>
   </div> 
</div>
<NavLink to="Menu"><button className="btn32">See more</button></NavLink>
<Outlet/> 
</>
)
}
export default Head6