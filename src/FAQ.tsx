import React, { useState } from 'react'
import Begin3 from './Begin3'
import './FAQ.css'
import End from './End';
import { useEffect } from 'react';
function FAQ() {
  const[Question,setquestion]=useState(false);
  const[Input,setinput]=useState("");
  const[Answer,setAnswer]=useState(false);
  const[Typing,setttping]=useState(true);
  useEffect(()=>
    {

      window.scrollTo(0,0);

    },[]) 
  const Clicking=()=>
  {

    setAnswer(true);
    setttping(false);
  }
  const TTT=(e:Event| any)=>
  {
    if(Typing)
    {
    setinput(e.target.value)
    }
  }
  return (
    <>
    <div style={{backgroundColor:'white'}}>
    <div>
     <Begin3/> 
    </div>
    <div className='inMid'>
      <div className='questions'>Questions Looks Here</div>
      <div className='simply'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </div>
    </div>
    <div className='ques'>
      <div className='how'>
            <div>How we serve food?</div>
            <div className='simplyy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='how'>
           <div>How can we get in touch with you?</div>
            <div  className='simplyy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='how'>
           <div>How is our food quality?</div>
            <div  className='simplyy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='how'>
            <div>What will be delivered ? and when?</div>
            <div  className='simplyy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='how'>
            <div>how do we give home delievery ?</div>
            <div  className='simplyy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='how'>
            <div>Is this restaurant 24 hours open ?</div>
            <div  className='simplyy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      {Answer ? <div className='how'>
                <p>User</p>
           {Input}      
      </div>:null}
    </div>
    <div className='tnq'>
      <button className='btnq' onClick={()=>setquestion(true)}>Add a question</button>
      {Question ? <div className='activee'> <textarea placeholder='please put your question' className='activein' onChange={TTT} />
        <button className='shq' onClick={Clicking}>Share my question</button>
       </div> : null }
    </div>
    </div>
    <End/>
    </>
  )
}

export default FAQ