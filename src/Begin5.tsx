import React from 'react'
import chery from './images/unsplash_4ycv3Ky1ZZU.png';
import tol1 from './images/MagnifyingGlass.png';
import tol2 from './images/User.png';
import tol3 from './images/Tote.png';
import './begin.css'
import { NavLink } from 'react-router-dom';
import './index.d';
function Begin5() {
  return (
    <div>
          <img className='chery' src={chery}/>
    <div className='intro'>
         <div className='ftt'>
           Food<span className='tuckk'>tuck</span> 
         </div>
         <div className='hmt'>
           <NavLink to="/" className="NavLink"> <p className='hom'>Home</p></NavLink>
           <NavLink to="/Menu" className="NavLink"><p className='hom'>Menu</p></NavLink> 
           <NavLink to="/Blog" className="NavLink"> <p className='hom'>Blog</p></NavLink>
            <p className='hom'>Pages</p>
           <NavLink to="/Bout" className="NavLink"> <p className='hom'>About</p></NavLink>
           <NavLink to="/Shop" className="NavLink"><p className='hos'>Shop</p></NavLink> 
           <NavLink to="/Sign" className="NavLink"><p className='hom'>Contact</p></NavLink> 
         </div>
         <div className='iii'>
            <img src={tol1} className='i2'/>
            <img src={tol2} className='i2'/>
            <NavLink to="/Cart"><img src={tol3} className='i2'/></NavLink>  
         </div>
         
    </div>
    <div className='omm'>
       <p className='men'>Our Shop</p>
    </div>
    </div>
  )
}

export default Begin5
