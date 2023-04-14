import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

export default function Card ({name, height, weight, life_span, temperament, id, image}) {
    
    return(
        <div className="card">
            <Link to={`/home/${id}`}>
            {image && <img style={{width:"200px", height:"200px"}} src={image.url} alt={name} />}
                </Link>
            <div>
            <h3 className="cardtitle">{name}</h3>
            <h5 className="carddescr">{temperament}</h5>
            <h5 className="carddescr">Imperial: {weight.imperial} / Metric: {weight.metric}</h5>
            </div>
            
        </div>
    )
}