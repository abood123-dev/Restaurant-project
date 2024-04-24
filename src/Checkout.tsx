import React, { useState } from 'react'
import Begin9 from './Begin9'
import './Checkout.css';
import { NavLink } from 'react-router-dom';
import End from './End';
import { useEffect } from 'react';
function Checkout() {
    const[inValue1,setvalue1]=useState<string>("");
    const[inValue2,setvalue2]=useState<string>("");
    const[inValue3,setvalue3]=useState<string>("");
    const[inValue4,setvalue4]=useState<string>("");
    const[inValue5,setvalue5]=useState<string>("");
    const[inValue6,setvalue6]=useState<string>("");
    const[inValue7,setvalue7]=useState<string>("");
    const[inValue8,setvalue8]=useState<string>("");
    const[inValue9,setvalue9]=useState<string>("");
    const[inValue10,setvalue10]=useState<string>("");
    const[inBol1,setbol1]=useState<boolean>(false);
    const[inBol2,setbol2]=useState<boolean>(false);
    const[inBol3,setbol3]=useState<boolean>(false);
    const[inBol4,setbol4]=useState<boolean>(false);
    const[inBol5,setbol5]=useState<boolean>(false);
    const[inBol6,setbol6]=useState<boolean>(false);
    const[inBol7,setbol7]=useState<boolean>(false);
    const[inBol8,setbol8]=useState<boolean>(false);
    const[inBol9,setbol9]=useState<boolean>(false);
    const[inBol10,setbol10]=useState<boolean>(false);
    const[inBol11,setbol11]=useState<boolean>(false);
    useEffect(()=>
      {
  
        window.scrollTo(0,0);
  
      },[]) 

     const Toship=()=>
        {
            if(inValue1.length===0)
                {
                   setbol1(true)
                }
                else
                {
                  setbol1(false);
                }
             if(inValue2.length===0)
            {
                  setbol2(true)
            }
            else
            {
              setbol2(false);
            }
             if(inValue3.length===0)
               {
                     setbol3(true)
               }
               else
               {
                 setbol3(false);
               }
             if(inValue4.length===0)
                  {
                        setbol4(true)
                  }
                  else
                  {
                    setbol4(false);
                  }
             if(inValue5.length===0)
                     {
                           setbol5(true)
                     }
                     else
                     {
                       setbol5(false);
                     }
             if(inValue6.length===0)
                        {
                           setbol6(true)
                        }
                        else
                        {
                          setbol6(false);
                        }
             if(inValue7.length===0)
                  {
                                 setbol7(true)
                  }
                  else
                  {
                    setbol7(false);
                  } 
             if(inValue8.length===0)
                     {
                                    setbol8(true)
                     }
                     else
                     {
                       setbol8(false);
                     } 
             if(inValue9.length===0)
                        {
                                       setbol9(true)
                        }
                        else
                        {
                          setbol9(false);
                        } 
             if(inValue10.length===0)
                           {
                                          setbol10(true)
                           }
                           else if(inValue10.length!==0)
                           {
                             setbol10(false);
                           }
              if(inValue1.length!==0 && inValue2.length!==0 && inValue3.length!==0 && inValue4.length!==0 && inValue5.length!==0 && inValue6.length!==0 && inValue7.length!==0 && inValue8.length!==0 && inValue9.length!==0 && inValue10.length!==0)
              {
                  setbol11(true);
              }                            
        }   
 
  return (
   <>
   <Begin9/>
   <div style={{backgroundColor:"white"}}>
       <div className='shipping'>Shipping Adress</div>
       <div className='twolabel'>
         <div className='alllabel'>
             <div className='labelin'>
                <div className='label'>First name</div> <div><input type='text' className='inin' onChange={(e)=>setvalue1(e.target.value)}/></div>
             {inBol1 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
             <div className='labelin'>
                <div className='label'>Email address</div> <div><input type='text'  className='inin' onChange={(e)=>setvalue2(e.target.value)}/></div>
                {inBol2 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
             <div className='labelin'>
                <div className='label'>Company</div> <div><input type='text'  className='inin' onChange={(e)=>setvalue3(e.target.value)}/></div>
                {inBol3 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
             <div className='labelin'>
                <div className='label'>City</div> <div><input type='text'  className='inin' onChange={(e)=>setvalue4(e.target.value)}/></div>
                {inBol4 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
             <div className='labelin'>
                <div className='label'>Adress 1</div> <div><input type='text'  className='inin' onChange={(e)=>setvalue5(e.target.value)}/></div>
                {inBol5 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
        </div>
        <div className='alllabel'>
             <div className='labelin'>
                <div className='label'>Last name</div> <div><input type='text' className='inin' onChange={(e)=>setvalue6(e.target.value)}/></div>
                {inBol6 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
             <div className='labelin'>
                <div className='label'>Phone number</div> <div><input type='text'  className='inin' onChange={(e)=>setvalue7(e.target.value)}/></div>
                {inBol7 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
             <div className='labelin'>
                <div className='label'>Country</div> <div><input type='text'  className='inin' onChange={(e)=>setvalue8(e.target.value)}/></div>
                {inBol8 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
             <div className='labelin'>
                <div className='label'>Zip code</div> <div><input type='text'  className='inin' onChange={(e)=>setvalue9(e.target.value)}/></div>
                {inBol9 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
             <div className='labelin'>
                <div className='label'>Adress 2</div> <div><input type='text'  className='inin' onChange={(e)=>setvalue10(e.target.value)}/></div>
                {inBol10 ? (
               <>
               <div style={{color:"red"}}>this input should be filled</div>
               </>
             ) : null}
             </div>
        </div>
</div>     
<div className='twobtns'>
    <NavLink to="/Cart"><button className='backto'>Back to Cart</button></NavLink> 
     <button className='toship' onClick={Toship}>Proceed to shipping</button>
</div>
{inBol11 ? (
   <>
   <div className='bol11'>your product is in the progress of making and delivering</div>
   </>
): null}
   </div>
   <End/>
   </>
  )
}

export default Checkout
