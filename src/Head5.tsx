import React from "react";
import './Head5.css';
import './index.d';
import { NavLink } from "react-router-dom";

const Head5=()=>
{
return(   
<>
<div className="pick">Choose and pick</div>
<div className="from"><span className="fr">Fr</span>om Our Menu </div>
<div className="kinds">
<NavLink to="/Menu" className="NavLink" ><div className="kind">Breakfast</div></NavLink> 
<NavLink to="/Menu" className="NavLink"> <div className="kind">Lunch</div> </NavLink>
<NavLink to="/Menu" className="NavLink"> <div className="kind">Dinner</div> </NavLink>
<NavLink to="/Menu" className="NavLink"><div className="kind">Desert</div> </NavLink> 
<NavLink to="/Menu" className="NavLink"> <div className="kind">Drink </div> </NavLink>
<NavLink to="/Menu" className="NavLink"> <div className="kind">Snack</div> </NavLink>
<NavLink to="/Menu" className="NavLink"> <div className="kind">Soups</div> </NavLink>
</div>
</>
)
}
export default Head5