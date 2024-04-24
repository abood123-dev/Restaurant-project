import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import Begin5 from './Begin5';
import axios from 'axios';
import { Console } from 'console';
import './Shop.css';
import { hover } from '@testing-library/user-event/dist/hover';
import { JsxElement } from 'typescript';
import End from './End';
import More from './more';
import { NavLink } from 'react-router-dom';
import Contextt from './Contextt';
export type Caat=
{
   id:number,
   category:string,
   img:string,
   price:number,
   desc:string
} 
export type Coot=
{
  Food:any,
  setFood:any,
}

const Shop = () =>
     {
    const[Food,setFood]=useState<Caat | any>([])
    const[newFood,setnew]=useState<Caat | any>([])
    const[newwFood,setneww]=useState<Caat | any>([])
    const[newwwFood,setnewww]=useState<Caat | any>([])
    const[Condition,setCond]=useState<boolean>(false);
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
          setnewww(data);
        })()
      
    },[endpoint])  
    const[Hover,sethover]=useState<any>(true);
    const[Hover2,sethover2]=useState<any>(true);
    const[Hover3,sethover3]=useState<any>(true);
    const[Hover4,sethover4]=useState<any>(true);
    const[Hover5,sethover5]=useState<any>(true);
    const[Hover6,sethover6]=useState<any>(true);
    const[Hover7,sethover7]=useState<any>(true);
    const[Hover8,sethover8]=useState<any>(true);
    const Sandsub= ()=>
      {  
        if(Hover)
          {
            const Sandwichfilter= Food.filter((food:Caat) => food.category==="sandwich"  ); 
            setFood(Sandwichfilter);
            sethover(!Hover)
          }  
          else
          {
            setFood(newFood);
            console.log(newFood);
          }
        }           
      const Sandsub2= ()=>
        {  
          if(Hover2)
            {
          const Sandwichfilter2= Food.filter((food:Caat) => food.category==="burger"  ); 
          setFood(Sandwichfilter2)
          sethover2(!Hover2);
           }
            else
            {
              setFood(newFood);
            }      
        }
        const Sandsub3= ()=>
          {  
            if(Hover3)
              {
            const Sandwichfilter3= Food.filter((food:Caat) => food.category==="pizza"  ); 
            setFood(Sandwichfilter3);
               sethover3(!Hover3);
              }
              else
              {
                setFood(newFood);
              }      
          }
          const Sandsub4= ()=>
            {  
              if(Hover4)
                {
              const Sandwichfilter4= Food.filter((food:Caat) => food.category==="dessert"  ); 
              setFood(Sandwichfilter4);
                 sethover4(!Hover4);
                }
                else
                {
                  setFood(newFood);
                }      
            }
            const Sandsub5= ()=>
              {  
                if(Hover5)
                  {
                const Sandwichfilter5= Food.filter((food:Caat) => food.category==="snack"  ); 
                setFood(Sandwichfilter5);
                   sethover5(!Hover5);
                  }
                  else
                  {
                    setFood(newFood);
                  }      
              }
              const Sandsub6= ()=>
                {  
                  if(Hover6)
                    {
                  const Sandwichfilter6= Food.filter((food:Caat) => food.category==="soup"  ); 
                  setFood(Sandwichfilter6);
                     sethover6(!Hover6);
                    }
                    else
                    {
                      setFood(newFood);
                    }      
                }
                const Sandsub7= ()=>
                  {  
                    if(Hover7)
                      {
                    const Sandwichfilter7= Food.filter((food:Caat) => food.category==="breakfast"  ); 
                    setFood(Sandwichfilter7);
                       sethover7(!Hover7);
                      }
                      else
                      {
                        setFood(newFood);
                      }      
                  }
                  const Sandsub8= ()=>
                    {  
                      if(Hover8)
                        {
                      const Sandwichfilter8= Food.filter((food:Caat) => food.category==="drink"  ); 
                      setFood(Sandwichfilter8);
                         sethover8(!Hover8);
                        }
                        else
                        {
                          setFood(newFood);
                        }      
                    }
                    const Filter2=(id:number)=>
                      {
                        const newfilter=Food.filter((food: Caat)=> food.id===id )
                        setneww(newfilter);
                        console.log(newfilter);
                      }                 
  return (
    <>
    <div>
      <Begin5/>
    </div>
    <div className='am'>   
    <div className='allmeals' style={{backgroundColor:"white"}}>
     {Food.map((food: Caat, index:any)=>     
     {
          return(
          <div key={food.id} className='meal' style={{color:"black"}} >
             <div>
           <img src={food.img} style={{width:"150px",height:"150px"}}/>
           </div>
            <div className='fooddesc'>
           {food.desc}
           </div>
           <div className='foodprice'>
           {food.price}
           </div> 
           <NavLink to={`/More/${food.id}`}>  <button className='detailsbtn' onClick={()=>Filter2(food.id)} key={food.id}>See details</button></NavLink>
          </div>
          )})}

         </div>
        <div className='checkboxes'>
             <div className='sef'>Search by filter</div>
             <div className='gory'>Category</div>
             <div className='ocheck'>
              <div> <input type='checkbox' value={Hover} onChange={Sandsub} onClick={()=>sethover(!Hover)}  /> </div> 
              <div>Sandwiches</div>  
              </div>
              <div className='ocheck'>
              <div> <input type='checkbox'  value={Hover2} onChange={Sandsub2} onClick={()=>sethover2(!Hover2)}    /> </div> 
              <div>Burger</div>  
              </div>
              <div className='ocheck'>
              <div> <input type='checkbox'  value={Hover3} onChange={Sandsub3} onClick={()=>sethover3(!Hover3)}  /> </div> 
              <div>Pizza</div>  
              </div>
              <div className='ocheck'>
              <div> <input type='checkbox'  value={Hover4} onChange={Sandsub4} onClick={()=>sethover4(!Hover4)}  /> </div> 
              <div>Dessert</div>  
              </div>
              <div className='ocheck'>
               <div> <input type='checkbox'  value={Hover5} onChange={Sandsub5} onClick={()=>sethover5(!Hover5)}  /> </div> 
              <div>Snack</div>  
              </div>
              <div className='ocheck'>
              <div> <input type='checkbox'  value={Hover6} onChange={Sandsub6} onClick={()=>sethover6(!Hover6)}  /> </div> 
              <div>Soup</div>  
              </div> 
              <div className='ocheck'>
              <div> <input type='checkbox'  value={Hover7} onChange={Sandsub7} onClick={()=>sethover7(!Hover7)}  /> </div> 
              <div>Breakfast</div>  
              </div>    
              <div className='ocheck'>
               <div> <input type='checkbox'  value={Hover8} onChange={Sandsub8} onClick={()=>sethover8(!Hover8)}  /> </div> 
              <div>Drink</div>  
              </div>        
        </div>
      </div>
      <End/>
    </>
  )
}
export default Shop