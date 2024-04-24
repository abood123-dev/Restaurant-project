import React, { useState } from "react";
import'./Head2.css'
import logo from './images/Image.png'
import'./index.d'
import { transform } from "typescript";
const Head2=()=>
{
const[Scroll,setScroll]=useState(false);
const[Transfrom,setTransform]=useState('');
const Translate=()=>
{
window.scrollTo(0,2400)
}    
return(
<>
<div className="desc">
<div className="sec1" >
<p className="quick">Its Quick & Amazing</p>
<p className="title"><span className="th">Th</span>e Art of speed food Quality </p>
<p className="talk">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Varius sed pharetra dictum neque massa congue</p>
<button className="btn1" onClick={Translate}>See Menu</button>
</div>
<div className="sec2">
<img className="img" src={logo} />
</div>
</div>




</>
)
}
export default Head2