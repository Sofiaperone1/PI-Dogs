import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div><NavLink  activeClassName='selected' style={{"color":"white" ,"marginBottom":"10px", "fontSize":"25px", "textDecoration":"none"}}to="/home">HOME</NavLink></div>
        <div><NavLink  activeClassName='selected' style={{ "color":"white" ,"marginBottom":"10px", "fontSize":"25px", "textDecoration":"none"}} to="/form">FORM</NavLink></div>
    </div>
  )
}

export default Navbar