import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
//import Loader from '../Loader/Loader';
import "./DetailCard.css"
import { getById } from '../../redux/actions';
import leftArrow from "../../imgs/leftArrow.png"
import ClipLoader from "react-spinners/ClipLoader";
import Footer from '../../components/Footer/Footer';

function DetailCard() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const dog = useSelector((state) => state.dogById);
    const [loading, setLoading] = useState(true);
    /*
    useEffect(() => {
        setLoading(true); // Establece el estado de carga en true antes de realizar la solicitud

        dispatch(getById(id))
            .then(() => {
                setLoading(false); // Establece el estado de carga en false cuando la solicitud se completa
            });
    }, [dispatch, id]); */

        return (
            <div className='detailscontainer' >
            
                <div className='returnBtn'>
                    <Link to={`/home`}><button> <img src={leftArrow}/> GO BACK</button></Link> 
                </div>
                <div className='detailCard'>
             <div className='cardImg' >
             {dog.image && <img style={{width:"500px", height:"300px"}} src={dog.image.url} alt={dog.name} />}
             </div>
             <div className='cardInfo'>
             <h2 className='titlerecipe'>{dog.name}</h2>
             <div><h4>Height:</h4>Imperial: {dog.height?.imperial} / Metric: {dog.height?.metric}</div>
             <div><h4>Weight</h4>Imperial: {dog.weight?.imperial} / Metric: {dog.weight?.metric}</div>
             <div><h4>Temperament:</h4>{dog.temperament}</div>
             <div><h4>Life span:</h4>{dog.life_span}</div>
             </div>
         </div>
             
            {/* { loading ?  ( <div className='loader'><ClipLoader color="#c487f4" size="80px" /> </div> ) :

             ( <div className='detailCard'>
             <div className='cardImg' >
             {dog.image && <img style={{width:"500px", height:"300px"}} src={dog.image.url} alt={dog.name} />}
             </div>
             <div className='cardInfo'>
             <h2 className='titlerecipe'>{dog.name}</h2>
             <div><h4>Height:</h4>Imperial: {dog.height?.imperial} / Metric: {dog.height?.metric}</div>
             <div><h4>Weight</h4>Imperial: {dog.weight?.imperial} / Metric: {dog.weight?.metric}</div>
             <div><h4>Temperament:</h4>{dog.temperament}</div>
             <div><h4>Life span:</h4>{dog.life_span}</div>
             </div>
         </div>)
             } */}
            <Footer/>
            </div>
        );
    }  

export default DetailCard;

