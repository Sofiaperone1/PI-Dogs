import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../imgs/logo.png"
import 'animate.css';

const Navbar = () => {
  return (
    <div className="nbCont">
      <NavLink  to="/home" ><img src={logo} alt="" /></NavLink>
    <div className='Navbar'>
        <div><NavLink  className='NavLinks' to="/home">HOME</NavLink></div>
       <span>/</span>
        <div><NavLink  className='NavLinks' to="/form">CREATE YOUR OWN DOG</NavLink></div>
    </div>
    </div>
  )
}

export default Navbar