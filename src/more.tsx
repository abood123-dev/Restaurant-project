import React, { FunctionComponent, createContext, useContext, useEffect } from "react";
import Contextt from "./Contextt";
import { Newwfoodcontext } from "./Contextt";
import { Caat } from "./Shop";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import './Shop.css';
import Begin6 from "./Begin6";
import './index.d';
import stars from './images/Star.png'
import './Details.css';
import End from "./End";
import Cart from "./Cart";
import { error } from "console";

const More = () => {
const {Food,setFood}=useContext(Newwfoodcontext);
const[Number,setnumber]=useState<number>(+1);
const[showitems, setitems]=useState(false);
const[Items, setitem]=useState<Caat[]>([]);
const[Items1, setitem1]=useState<Caat[]>([]);
const[Cartitems,setCart]=useState<Caat | any>([])
  console.log(Food);
  const { id } =useParams();
  const [newArray,setnw]=useState([]);
  console.log('id from url',id);
  const parseId= id!==undefined ? parseInt(id) : undefined;
  console.log(parseId);
  const SelectedItem = Food.find((food:Caat) =>
    {
  return food.id == parseId
 } );

  const Minus=()=>
    {
        if(Number!==1)
          {
            setnumber(Number-1);
          }
          else
          {
            setnumber(Number);
          }
    }
    const SetClick=()=>
      {
        setitems(true);   
        setitem(SelectedItem);
  
      }
      useEffect(()=>
        {
          const Data=window.localStorage.getItem('Cartitems');
          if(Data === null)
          {
            throw TypeError("error")
          }
          else
          {
            Items.push(JSON.parse(Data));
          }
         
        }
        ,[])
      useEffect(()=>
        {
            window.localStorage.setItem('Cartitems', JSON.stringify(Items));
}, [Items,Number]);
       
   
  return (
   <>
   <Begin6/>
   <div style={{backgroundColor:"white"}}>
   {SelectedItem ? (
    <div  className="productdetails">
    <div>  
    <img src={SelectedItem.img} className="selectimg" />  
    </div>
    <div className="product2">
    <div className="Descc">{SelectedItem.desc}</div>
    <div className="Descc2">{SelectedItem.desc2}</div>
    <div className="starrow">
         <div><img src={stars} /> <img src={stars} /> <img src={stars} /> <img src={stars} /> <img src={stars} /></div>
         <div>|</div>
         <div>5.0 Rating</div>
         <div>|</div>
         <div>22 Reviws</div>
    </div>
    <div className="Descc3">
         <div className="plusandminus">
           <div className="minus" onClick={Minus}>-</div> <div className="num">{Number}</div> <div className="minus" onClick={()=> setnumber(Number+1) } >+</div>
          </div>
          <div><button className="addtocart" key={SelectedItem.id} onClick={SetClick}>Add to Cart</button></div>
          {showitems ? (           
            <>
            <div className="numsir">{Number}</div>
            <div className="cartt">
            <div className="ccc">Cart items</div>
           <div className="threerow">
            <div><img src={SelectedItem.img}className="smallimm"/></div> <div>{SelectedItem.desc}</div> <div className="pricecolor">{SelectedItem.price}</div>   
            </div>
       <NavLink to="/Cart"> <div><button className="viewcart">View my Cart</button></div> </NavLink>  
                </div> 
               
            </>
           ) : null  }
    </div>
    </div>
    </div>
   ): (
    <p>Item not found</p>
   ) }
   </div>
   <End/>

   </>
    
  )
}

export default More
