import React, { useState } from 'react'
import Begin10 from './Begin10'
import './Sign.css';
import End from './End';
import { useEffect } from 'react';
function Signup() {
  useEffect(()=>
    {

      window.scrollTo(0,0);

    },[]) 
    const[Input1,setInput1]=useState<string>("")
    const[Input2,setInput2]=useState<string>("")
    const[Input3,setInput3]=useState<string>("")
    const[Bool1,setBool1]=useState<boolean>(false);
    const[Bool2,setBool2]=useState<boolean>(false);
    const[Bool3,setBool3]=useState<boolean>(false);
    const[Bool4,setBool4]=useState<boolean>(false);
    const Checkit=()=>
        {
          if(Input1.length===0)
            {
              setBool1(true);
            }
            else
            {
                setBool1(false)
            } 
            if(Input2.length===0)
            {
              setBool2(true);
            }
            else
            {
                    setBool2(false)
            } 
             if(Input3.length===0)
             {
                      setBool3(true);
             }
              else
              {
                        setBool3(false)
              }
         if(Input1.length!==0 && Input2.length!==0 && Input3.length!==0 )
            {
              setBool4(true);
            }
            else
            {
                setBool4(false);
            }
        }
  return (
    <>
    <Begin10/>
    <div className='trr'>
       <div className='smalltrr'>
          <div className='flextrr'>
              <div className='signuptr'>Sign up</div>
              <div><input placeholder='Name' className='intrr' onChange={(e)=>setInput1(e.target.value)}/></div>
              {Bool1 ? (
                <>
                <div style={{color:"red"}}>this input should be filled</div>
                </>
              ) : null}
              <div><input placeholder='Email' className='intrr'  onChange={(e)=>setInput2(e.target.value)}/></div>
              {Bool2 ? (
                <>
                <div style={{color:"red"}}>this input should be filled</div>
                </>
              ) : null}
              <div><input type='password' placeholder='Password' className='intrr'  onChange={(e)=>setInput3(e.target.value)}/></div>
              {Bool3 ? (
                <>
                <div style={{color:"red"}}>this input should be filled</div>
                </>
              ) : null}
              <div className='remember'><input type='checkbox' /> <p style={{color:"black"}} >Remember me?</p>  </div>
              <div><button className='signtrr' onClick={Checkit}>Sign up</button></div>
              {Bool4 ? (
                <>
                <div style={{color:"green",width:"260px",textAlign:"center",fontFamily:"Arial"}}>we will send you a verifiction message check your gamil</div>
                </>
              ) : null}
          </div>
        </div>  
    </div>
    <End/>
    </>
  )
}

export default Signup
