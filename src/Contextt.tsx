import React from 'react'
import { useContext } from 'react';
import { Coot }from './Shop';
import { useState } from 'react';
import { Caat } from './Shop';
import { useEffect } from 'react';
import { createContext } from 'react';
export const Newwfoodcontext = createContext({} as Coot);
type childrenprops=
{
    children?:React.ReactNode,
    newwFood?:any
}
const Contextt=({children}:childrenprops)=>
    {
        const[Food,setFood]=useState<Caat | any>([])
        const[newFood,setnew]=useState<Caat | any>([])
        const endpoint = 'http://localhost:8000/blogs';
      useEffect(()=>
        {
           (async ()=>
            {
              const data=await fetch(endpoint)
              .then((res)=> res.json() )
              setFood(data);
              console.log(data);
              console.log(Food);
              setnew(data);
            })()
          
        },[endpoint])
 return(
 <>
  <Newwfoodcontext.Provider value={{Food,setFood}}>
    {children}
    </Newwfoodcontext.Provider>           
</>
 )
    }
export default Contextt
