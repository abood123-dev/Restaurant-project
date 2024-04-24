import React from 'react';
import { NavLink } from 'react-router-dom';
import Watch from './images/Watch.png';
import Clm from './images/unsplash_CLMpC9UhyTo (1).png';
import Mask from './images/Mask Group.png';
import Mask2 from './images/Mask Group (1).png';
import icon1 from './images/Rectangle 8787.png';
import icon2 from './images/Rectangle 8788.png';
import icon3 from './images/Rectangle 8789.png';
import icon4 from './images/Rectangle 8790.png';
import icon5 from './images/Rectangle 8791.png';
import smicon1 from './images/.png';
import smicon2 from './images/.png';
import smicon3 from './images/.png';
import smicon4 from './images/.png';
import smicon5 from './images/.png';
import './End.css';
import { watch } from 'fs';
const End=()=>
{
return(
<>
<div className='support'>
    <div className='still'>
    <span className='st'>St</span>ill You Need Our Support ?
    </div>
    <div className='inp'>
     <input placeholder='Enter Your Email' type='text' className='email' />
    <NavLink to="/Sign"> <button className='subscribe'>Subscribe now</button></NavLink>
    </div>
</div>
<div className='dont'>Don’t wait make a smart & logical quote here. Its pretty easy.</div>
<hr className='line' />
<div className='settings'>
   <div className='firstcol'>
        <div className="defin">About us</div>
        <div className='clients'>orporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.</div>
        <div className='setting'>
              <div>
                <img src={Watch} className='watch'/>
              </div>
              <div>
                <p className='opening'>Opening houres</p>
                <p className='mon'>Mon - Sat(8.00 - 6.00)</p>
                <p className='closed'>Sunday - Closed</p>
              </div>
        </div>
   </div>
   <div className='secondcol'>
       <div className='defin'>Useful Links</div>
     <NavLink to="/Bout" className="NavLink"> <div className='small'>About</div></NavLink> 
     <NavLink to="/Bout" className="NavLink"> <div className='small' >News</div></NavLink> 
       <div className='small'>Partners</div>  
     <NavLink to="/Chefs" className="NavLink"> <div className='small'>Team</div></NavLink> 
     <NavLink to="/Menu" className="NavLink"> <div className='small'>Menu</div></NavLink> 
     <NavLink to="/Sign" className="NavLink"><div className='small'>Contacts</div> </NavLink>  
   </div>
   <div className='secondcol'>
   <div className='defin'>Help?</div>
    <NavLink to="/Faq" className="NavLink"><div className='small' >FAQ</div></NavLink>   
       <div className='small' >Terms & conditions</div>
       <div className='small'>Reporting</div>  
       <div className='small'>Documentation</div>
       <div className='small'>Support Policy</div>
       <div className='small'>Privacy</div> 
    </div> 
    <div className='finalcol'>
       <div className='defin'>Recent Post</div>
       <div className='pichis'>
           <div><img src={Clm}/></div>
           <div>
            <p>20  Feb  2022</p>
            <p>Keep Your Buisness</p>
            </div>        
       </div>
       <div className='pichis'>
           <div><img src={Clm}/></div>
           <div>
            <p>20  Feb  2022</p>
            <p>Keep Your Buisness</p>
            </div>        
       </div>
       <div className='pichis'>
           <div><img src={Clm}/></div>
           <div> 
            <p>20  Feb  2022</p>
            <p>Keep Your Buisness</p>
            </div>        
       </div>
    </div>

</div>
<div className='endo'>
   <div className='copyright'> Copyright © 2022 by Ayeman. All Rights Reserved.</div>
    <div className='iconss'>
        <img src={icon1}/>
        <img src={icon2}/>
        <img src={icon3}/>
        <img src={icon4}/>
        <img src={icon5}/>
        <div className='sms'>
        <img className='sm' src={smicon1}/>
        <img className='sm1' src={smicon2}/>
        <img className='sm2' src={smicon3}/>
        <img className='sm3' src={smicon4}/>
        <img className='sm4' src={smicon5}/>
        </div>
    </div>
</div>
</>
)
}
export default End