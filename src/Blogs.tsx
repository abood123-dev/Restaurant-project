import React from "react";
import Placehold from './images/Image Placeholder.png';
import Placehold1 from './images/Image Placeholder (1).png';
import Placehold2 from './images/Image Placeholder (2).png';
import thumpsup from './images/ThumbsUp.png';
import comment from './images/ChatDots.png';
import share from './images/ShareNetwork.png';
import './Blogs.css'
const Blogs=()=>
{
return(
<>
<div className="post">Blog Post</div>
<div className="News"><span className="la">La</span>test News & Blog</div>
<div className="types">
<div className="type">
    <div>
 <img className="onetype" src={Placehold} />
    </div>
 <div className="history">10 February 2022 </div>
 <div className="twotype">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</div>
    <div className="reaction">
     <p className="more">Learn more</p>
     <img className="react" src={thumpsup}/>
     <img className="react" src={comment}/>
     <img className="react" src={share}/>
    </div>
    </div>
    <div className="type">
    <div>
 <img className="onetype" src={Placehold1} />
    </div>
 <div className="history">10 February 2022 </div>
 <div className="twotype">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</div>
    <div className="reaction">
     <p className="more">Learn more</p>
     <img className="react" src={thumpsup}/>
     <img className="react" src={comment}/>
     <img className="react" src={share}/>
    </div>
    </div>
    <div className="type">
    <div>
 <img className="onetype" src={Placehold2} />
    </div>
 <div className="history">10 February 2022 </div>
 <div className="twotype">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</div>
    <div className="reaction">
     <p className="more">Learn more</p>
     <img className="react" src={thumpsup}/>
     <img className="react" src={comment}/>
     <img className="react" src={share}/>
    </div>
    </div>
   </div>




</>
)
}
export default Blogs