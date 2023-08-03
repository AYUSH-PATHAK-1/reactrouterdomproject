import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';


const Navbar = () => {
  return (
     <div>
        <ul>
        <NavLink activeClassName="active" exact to="/"><li>Home</li></NavLink>
        <NavLink activeClassName="active" exact to="/About"><li>About</li></NavLink>
        <NavLink activeClassName="active" exact to="/Contact"><li>Contact</li></NavLink>
        <NavLink activeClassName="active" exact to="/More"><li>More</li></NavLink>  
        </ul>     
        
     </div>
   
  )
}

export default Navbar