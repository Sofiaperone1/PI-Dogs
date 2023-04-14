import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
//import Loader from '../Loader/Loader';
import "./DetailCard.css"
import { getById } from '../../redux/actions';

function DetailCard() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const dog = useSelector((state) => state.dogById);
    

    useEffect(() => {
    
    dispatch(getById(id));
    
    }, [dispatch]);

        return (
            <div className='detailscontainer' >
                <div className='botondevolver'>
                    <Link to={`/home`}><button>Volver</button></Link>
                </div>
                <h2 className='titlerecipe'>{dog.name}</h2>
                <div className='imgyresumen'>
                    <div className='imgrecipe' >
                    {dog.image && <img style={{width:"500px", height:"300px"}} src={dog.image.url} alt={dog.name} />}
                    </div>
                    <div className='resumenrecipe'>
                        <h4>Resumen:</h4>{dog.id}
                    </div>
                </div>

                <div className='recipecarac'>
                <div><h4>Height:</h4>Imperial: {dog.height?.imperial} / Metric: {dog.height?.metric}</div>
                <div><h4>Weight</h4>Imperial: {dog.weight?.imperial} / Metric: {dog.weight?.metric}</div>
                    <div><h4>Temperament:</h4>{dog.temperament}</div>
                    <div><h4>Life span:</h4>{dog.life_span}</div>
                </div>

            </div>
        );
    }  /*else {
        return (
            <Loader />
        )
    }
} */

export default DetailCard;

