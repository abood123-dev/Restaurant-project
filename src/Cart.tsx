import React, { useEffect, useState } from 'react';
import Begin8 from './Begin8';
import End from './End';
import { Caat } from './Shop'
import { JsxElement } from 'typescript'
import Fetch from './Fetch'
import './Cart.css';
import { NavLink } from 'react-router-dom';
const Cart=() => {
  const [Data,setData]=useState<Caat>();
  const [Veri,setVeri]=useState<boolean>(false);
  const [Value,setValue]=useState<string>("")
  useEffect(()=>
    {
      Fetchfromlogic();
    })
  const Fetchfromlogic=()=>
    {
     const Fetched =window.localStorage.getItem('Cartitems');
     if(Fetched!==null)
      {
        const parsedData=JSON.parse(Fetched);
        setData(parsedData);
      }
      else
      {
        console.log('no data was found')
      }
    }
    const applybtn=()=>
      {
         if(Value.length > 0)
          {
            setVeri(true);
          }
      }
  return (
    <>
    <Begin8/>
    
    {Data ? (
      <>
      <div style={{backgroundColor:"white",paddingBottom:"50px"}}>
     <div className='yourcart'>Your Cart :</div>
      <div className='Cartrow'>
          <div><img className='Dataimg' src={Data.img}/></div>
          <div className='datadesc'>{Data.desc}</div>
          <div className='dataprice'>{Data.price}</div>
      </div>
      <div className='inrowdata'>
           <div>
                <div className='datadesc2'>
                  Coupon Code
                </div>
                <div className='datarows'>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</div> 
                  <div className='inandbut'><input placeholder='enter here code' className='datain' onChange={(e)=>setValue(e.target.value)}/><button className='apply' onClick={applybtn}>Apply</button></div>
                {Veri ? (
                  <div style={{color:"green"}}> your code is verified</div>
                ) : null}
                </div>



           </div>
           <div className='alldata'>
                <div className='datadesc3'>
                 Total Bill
                </div>
                <div className='sixdata'>
                     <div className='dataone'><div>Cart Subtotal</div> <div>{Data.price}</div> </div>
                     <div className='dataone'><div>Shipping Charge</div> <div>00$</div></div>
                     <div className='dataone'><div>Total Amount</div> <div>{Data.price}</div></div>
                </div>
                <div>
              <NavLink to="/Checkout"> <button className='pac'>Proceed to Checkout</button></NavLink> 
                </div>
           </div>
      </div>
      </div>
      <End/>
      
    </>
     
     
     
    ) : (
     <p>no Data</p> 
    )}
   
    </>
    
  )
}

export default Cart
