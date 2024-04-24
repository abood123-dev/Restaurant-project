import React from 'react'
import Begin2 from './Begin2'
import './index.d'
import Ch from './images/unsplash_lRAWcT7uwhY.png';
import Ch2 from './images/unsplash_XQWfro4LrVs.png';
import Ch3 from './images/unsplash_v3OlBE6-fhU.png';
import Ch4 from './images/unsplash_SiQgni-cqFg.png';
import Ch5 from './images/unsplash_7qileFwJEWo.png';
import Ch6 from './images/unsplash_DdglEoIC2y4.png';
import Ch7 from './images/unsplash_llcX9pTjhXM.png';
import Ch8 from './images/unsplash_uTaSlu2Jfsg.png';
import Ch9 from './images/unsplash_iv6yNy7oBqQ.png';
import Ch10 from './images/unsplash_CYnQUywzBtI.png';
import Ch11 from './images/unsplash_VdFBh2ZgXbM.png';
import Ch12 from './images/unsplash_GSD9VoG6f-U.png';
import { useEffect } from 'react';
import './Chefs.css';
import End from './End';
import More from './more';
const Chefs=() => {
  useEffect(()=>
    {

      window.scrollTo(0,0);

    }) 
  return (
    <>
    <div style={{backgroundColor:'white',marginBottom:'30px'}}>
    <div>
      <Begin2/>
    </div>
    <div className='CH'>
    <div className='Ch1'>
        <div className='C1'>
          <img className='cc1' src={Ch}/>
          <div>Tahmina Rumi</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch2}/>
          <div>Jorina Begum</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch3}/>
          <div>M.Mohammad</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch4}/>
          <div>Munna Kathy</div>
          <div>Chef</div>
        </div>
    </div>
    <div className='Ch1'>
        <div className='C1'>
          <img className='cc1' src={Ch5}/>
          <div>Tahmina Rumi</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch6}/>
          <div>Bisnu Devgon</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch7}/>
          <div>Motin Molladsf</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch8}/>
          <div>William Rumi</div>
          <div>Chef</div>
        </div>
    </div>
    <div className='Ch1'>
        <div className='C1'>
          <img className='cc1' src={Ch9}/>
          <div>Kets william rumi</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch10}/>
          <div>Mahmud kholil</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch11}/>
          <div>Ataur Rahman</div>
          <div>Chef</div>
        </div>
        <div className='C1'>
        <img className='cc1' src={Ch12}/>
          <div>Monalisa Holy</div>
          <div>Chef</div>
        </div>
    </div>
    </div>
    </div>
    <End/>
    </>
  )
}

export default Chefs
