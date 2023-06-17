import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../imgs/logo.png"
import 'animate.css';
import { fillDogs } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Navbar = () => {

  const dispatch = useDispatch();

  const handleFill = () => {
   
    dispatch(fillDogs())
  }
  return (
    <div className="nbCont">
      <NavLink  to="/home" ><img src={logo} alt="" /></NavLink>
    <div className='Navbar'>
        <div><NavLink  className='NavLinks' onClick={handleFill} to="/home">HOME</NavLink></div>
       <span>/</span>
        <div><NavLink  className='NavLinks' to="/form">CREATE YOUR OWN DOG</NavLink></div>
    </div>
    </div>
  )
}

export default Navbar