import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"
import logo from "../../imgs/logo.png"
export default function LandingPage() {
    return (
        <div className="landingbackground">
            <div className="contlanding">
               <p>HENRY's PI - API DOGS </p>
               <Link  className='NavLinks' to="/home"><button className="enterbutton2">GO</button></Link>
               
            </div>
        </div>

    )
}