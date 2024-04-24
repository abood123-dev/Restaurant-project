import React, { useRef, useState } from "react";
import './header.css'
import Head2 from "./head2";
import handbag from "./images/Handbag.png"
import group from "./images/Group.png"
import Head3 from "./Head3";
import Head4 from "./Head4";
import Head5 from "./Head5";
import Head6 from "./Head6";
import Head7 from "./Head7";
import Blogs from "./Blogs";
import End from "./End";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Heeder=()=>
{
const[showop,setShowop]=useState<boolean>(false);        
return(
<>
<div className="header">
    Food <span className="tuck">tuck</span>
</div>
<div className="head">
    <div className="options">
        <p className="pp">Home</p>
     <NavLink to="Menu" className="NavLink"> <p className="pp">Menu</p> </NavLink>  
     <NavLink to="/Blog" className="NavLink"><p className="pp">Blog</p> </NavLink>
        <p className="pp">Pages</p>
      <NavLink to="/Bout" className="NavLink"> <p className="pp">About</p></NavLink> 
      <NavLink to="Shop" className="NavLink"> <p className="pp">Shop</p></NavLink> 
      <NavLink to="/Sign" className="NavLink"> <p className="pp">Contact</p></NavLink> 
    </div>
    <div className="right">
        <input type="text" placeholder="Search..." className="headin" onChange={()=>setShowop(true)} onBlur={()=>setShowop(false)} />
        <img src={group} className="search"/> 
       <NavLink to="/Cart" className="NavLink"><img src={handbag} className="handbag"/></NavLink> 
    </div>    
</div>
<Head2/>
<Head3/>
<Head4/>
<Head5/>
<Head6/>
<Head7/>
<Blogs/>
<End/>
</>
)
}
export default Heeder