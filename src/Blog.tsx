import React, { useReducer, useRef, useState } from 'react'
import Begin4 from './Begin4'
import blog1 from './images/unsplash_lP5MCM6nZ5A.png';
import blog2 from './images/unsplash_MqT0asuoIcU.png';
import blog3 from './images/unsplash_XoByiBymX20.png';
import blog4 from './images/unsplash_mAQZ3X_8_l0 (1).png';
import calender from './images/Calendar.png';
import chats from './images/Chats.png';
import User from './images/UserCirclePlus.png';
import './Blog.css';
import End from './End';
import { useEffect } from 'react';
function Blog() {
  useEffect(()=>
    {

      window.scrollTo(0,0);

    },[]) 
  const[New,setnew]=useState("");
  const[isTrue,setistrue]=useState(false);
  const[TTyping,settyping]=useState(true);
  const Change=(e:any)=>  
  {
    if(TTyping)
    {
   setnew(e.target.value);
    }
  }
  const Addc=()=>
  {
    setistrue(true);
    settyping(false);
    myRef.current.value="";
  }
  const[Neww,setneww]=useState("");
  const[isTtrue,setisttrue]=useState(false);
  const[TTtyping,setttyping]=useState(true);
  const Changee=(e:any)=>  
  {
    if(TTtyping)
    {
   setneww(e.target.value);
    }
  }
  const Addcc=()=>
  {
    setisttrue(true);
    setttyping(false);
    myRef.current.value="";
  }
  const[New2,setnew2]=useState("");
  const[isTrue2,setistrue2]=useState(false);
  const[TTyping2,settyping2]=useState(true);
  const Change2=(e:any)=>  
  {
    if(TTyping2)
    {
   setnew2(e.target.value);
    }
  }
  const Addc2=()=>
  {
    setistrue2(true);
    settyping2(false);
    myRef.current.value="";
  }
  const[New3,setnew3]=useState("");
  const[isTrue3,setistrue3]=useState(false);
  const[TTyping3,settyping3]=useState(true);
  const Change3=(e:any)=>  
  {
    if(TTyping3)
    {
   setnew3(e.target.value);
    }
  }
  const Addc3=()=>
  {
    setistrue3(true);
    settyping3(false);
    myRef.current.value="";
  }
  const myRef = React.useRef<HTMLDivElement | any>(null);
  return (
    <>
    <Begin4/>
    <div style={{backgroundColor:'white', width:'100%',marginBottom:'40px'}}>
    <div className='allblogs'>
    <div className='fblog'>
         <div>
          <img src={blog1} className='blog1'/>
        </div>
        <div className='desblog'>
          <img src={calender}/>
          <div>Feb 14 , 2022 /</div>
          <img src={chats}/>
          <div style={{marginRight:'10px'}}>3 /</div>
          <img src={User}/>
          <div>Admin</div>
        </div>
        <div className='reasons'>
        10 Reasons To Do A Digital Detox Challenge
        </div>
        <div className='at'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </div>  
        <div className='comments' >
         <p style={{fontSize:"26px"}}>comments</p>
         <input placeholder='Leave a comment' className='fcomm' onChange={Change} ref={myRef} />
         <button className='btc' onClick={Addc} >Share my comment</button>
         {isTrue ? <div>
            <div className='SSS'>User</div>
            <div className='SS'>{New}</div>
         </div> : null}
        </div>      
    </div>    
    <div className='fblog'>
         <div>
          <img src={blog2} className='blog1'/>
        </div>
        <div className='desblog'>
          <img src={calender}/>
          <div>Feb 14 , 2022 /</div>
          <img src={chats}/>
          <div style={{marginRight:'10px'}}>3 /</div>
          <img src={User}/>
          <div>Admin</div>
        </div>
        <div className='reasons'>
        Traditional Soft Pretzels with Sweet Beer Cheese
        </div>
        <div className='at'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </div>  
        <div className='comments' >
         <p style={{fontSize:"26px"}}>comments</p>
         <input placeholder='Leave a comment' className='fcomm' onChange={Changee} ref={myRef} />
         <button className='btc' onClick={Addcc} >Share my comment</button>
         {isTtrue ? <div>
            <div className='SSS'>User</div>
            <div className='SS'>{Neww}</div>
         </div> : null}
        </div>      
    </div>    
    <div className='fblog'>
         <div>
          <img src={blog3} className='blog1'/>
        </div>
        <div className='desblog'>
          <img src={calender}/>
          <div>Feb 14 , 2022 /</div>
          <img src={chats}/>
          <div style={{marginRight:'10px'}}>3 /</div>
          <img src={User}/>
          <div>Admin</div>
        </div>
        <div className='reasons'>
        The Ultimate Hangover Burger: Egg in a Hole Burger
        </div>
        <div className='at'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </div>  
        <div className='comments' >
         <p style={{fontSize:"26px"}}>comments</p>
         <input placeholder='Leave a comment' className='fcomm' onChange={Change2} ref={myRef} />
         <button className='btc' onClick={Addc2} >Share my comment</button>
         {isTrue2 ? <div>
            <div className='SSS'>User</div>
            <div className='SS'>{New2}</div>
         </div> : null}
        </div>      
    </div>    
    <div className='fblog'>
         <div>
          <img src={blog4} className='blog1'/>
        </div>
        <div className='desblog'>
          <img src={calender}/>
          <div>Feb 14 , 2022 /</div>
          <img src={chats}/>
          <div style={{marginRight:'10px'}}>3 /</div>
          <img src={User}/>
          <div>Admin</div>
        </div>
        <div className='reasons'>
        My Favorite Easy Black Pizza Toast Recipe
        </div>
        <div className='at'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </div>  
        <div className='comments' >
         <p style={{fontSize:"26px"}}>comments</p>
         <input placeholder='Leave a comment' className='fcomm' onChange={Change3} ref={myRef} />
         <button className='btc' onClick={Addc3} >Share my comment</button>
         {isTrue3 ? <div>
            <div className='SSS'>User</div>
            <div className='SS'>{New3}</div>
         </div> : null}
        </div>      
    </div>            
    </div>
    </div>
    <End/>    
    </>
  )
}

export default Blog
