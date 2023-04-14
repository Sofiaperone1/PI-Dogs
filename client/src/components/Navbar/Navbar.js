import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div><NavLink style={{"color":"white" ,"margin-bottom":"10px", "font-size":"25px", "text-decoration":"none"}}to="/home">HOME</NavLink></div>
        <div><NavLink style={{ "color":"white" ,"margin-bottom":"10px", "font-size":"25px", "text-decoration":"none"}} to="/form">FORM</NavLink></div>
    </div>
  )
}

export default Navbar