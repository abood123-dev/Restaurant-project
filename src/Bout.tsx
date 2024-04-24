import React from 'react';
import Begin7 from './Begin7';
import food1 from './images/unsplash_lP5MCM6nZ5A.png';
import food2 from './images/unsplash_dphM2U1xq0U.png';
import food3 from './images/unsplash_CLMpC9UhyTo.png';
import food4 from './images/unsplash_-GFCYhoRe48.png';
import food5 from './images/unsplash_tzl1UCXg5Es.png';
import food6 from './images/unsplash_mmnKI8kMxpc.png';
import play from './images/Play.png';
import rectimg from './images/unsplash_3iexvMShGfQ.png';
import Student from './images/Student.png';
import Coffeee from './images/Coffee.png';
import Person from './images/Person.png';
import test1 from './images/Rectangle 8934.png';
import test2 from './images/Ellipse 6.png';
import quote from './images/Quotes.png';
import stars from './images/Star.png';
import Loading from './images/Dot.png';
import './about.css'
import End from './End';
import { useEffect } from 'react';
function Bout() {
  useEffect(()=>
    {

      window.scrollTo(0,0);

    }) 
  return (
    <>
    <Begin7/>
    <div style={{backgroundColor:'white'}}>
    <div className='about1'>
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
    <div className='about2'>
        <div className='boot'>About us </div>
        <div className='boot2'>Food is an important 
part Of a balanced Diet</div>
        <div className='boot3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
        <div className="row">
      <button className="btn33">See more</button>
      <img src={play}/>
      <p className="manoo">watch video</p>
    </div> 
    </div>

    </div>
   <div className='putcenter'> 
     <div className='whych'>Why Choose us</div>  
     <div className='smalltitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </div>
     <div ><img className='rectimg' src={rectimg}/></div>

  </div> 
   <div className='threeinone'>
         <div className='threeone'>
               <div><img src={Student}/></div>
                <div className='bsc'>Best Chef</div> 
                <div className='thetitl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </div>
         </div>
         <div className='threeone' >       
             <div><img src={Coffeee}/></div>
                <div className='bsc'>120 Item food</div> 
                <div className='thetitl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </div>
                </div>
         <div className='threeone'>   
                <div><img src={Person}/></div>
                <div className='bsc'>Clean Environment</div> 
                <div className='thetitl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </div>
                </div>

   </div>
   <div className='testimon'>Testinonals</div>
   <div>
    <img className="whitepage" src={test1}/>
    <img className="profilepicc" src={test2}/>
    <img className="quotess" src={quote}/>
    <p className="test33">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    <img className="starss" src={stars}/> <img className="starss2" src={stars}/> <img className="starss3" src={stars}/> <img className="starss4" src={stars}/> <img className="starss5" src={stars}/>
    <p className="alaminn">Alamin Hasan</p>
    <p className="specc">Food Specialist</p>

</div>



    </div>
    
    
    <End/>
    </>
      
    
  )
}

export default Bout
