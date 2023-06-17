import React from 'react';
import axios from 'axios';
import { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTemperaments, harcodedForm } from '../../redux/actions';
import "./Form.css"
import TempChecks from '../../components/TempChecks/TempChecks';
import leftArrow from "../../imgs/leftArrow.png"
import { Link } from "react-router-dom";
import numero1 from "../../imgs/numero1.png"
import numero2 from "../../imgs/numero2.png"
import Swal from 'sweetalert2'
import Footer from '../../components/Footer/Footer';

const Form = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  
    
  }, [dispatch]);

const selectedTemps = useSelector(state => state.selectedTemps);

const [maxWeight, setMaxWeight] = useState("");
const [minWeight, setMinWeight] = useState("");
const [maxHeight, setMaxHeight] = useState("");
const [minHeight, setMinHeight] = useState("");


const peso = {
  imperial: `${minWeight} - ${maxWeight}`,
  metric: " 0 - 0 "
}
const image = {
  url: "https://img.freepik.com/vector-gratis/lindo-perro-sacando-lengua-ilustracion-icono-dibujos-animados_138676-2709.jpg?w=2000"
}
const altura = {
  imperial: `${minHeight} - ${maxHeight}`,
  metric: "0  - 0"
}


const [form,setForm] = useState({
  name:"",
  height:{},
  weight:{},
  life_span:"",
  temperaments:"",
  })

 

const [errors, setErrors] = useState({
name:"",
height:"",
weight:"",
life_span:"",
temperaments:""
})

function validate(input){
  let errors={};
    if(input.name.length >= 1 && input.name.length <= 2){
        errors.name="Name must be longer";
    } 
    if(input.name.length > 30){
      errors.name="Name must be shorter";
  } 

  if (input.life_span && input.life_span < 10 ) {
    errors.life_span = "Must be a number between 10 and 60";
}
  if (input.life_span > 60 ) {
    errors.life_span = "Must be a number between 10 and 60";
}
  if(input.maxHeight && input.maxHeight > 100 ){
        errors.maxHeight = "Must be smaller than 100";
        console.log(errors.maxHeight)
    }
    if(input.minHeight && input.minHeight < 10 ){
      errors.maxHeight = "Must be taller than 10";
      console.log(errors.minHeight)
  }
  if(input.maxWeight && input.maxWeight > 100 ){
    errors.maxHeight = "Must be lighter 100";
    console.log(errors.maxHeight)
}
if(input.minWeight && input.minWeight < 3 ){
  errors.maxHeight = "Must be heavier than 1";
  console.log(errors.minHeight)
}

    return errors;
}



const changeHandler = (e) => {

setErrors(validate({
    ...form,
    [e.target.name]: e.target.value
}))
setForm({
  ...form,
  [e.target.name]: e.target.value
})
}

const changeTwoHandlers = (e) => {
  const property = e.target.name;
  const value=e.target.value;
  
if (property === "maxWeight") {
  setMaxWeight(value)
  console.log("soy max weight")
}
else if (property === "maxHeight") {
  setMaxHeight(value)
  console.log("soy max height")
}
else if (property ==="minHeight") {
  setMinHeight(value) 
  console.log("soy min height")
}
else { setMinWeight(value) 
  console.log("soy min weight")}

  setErrors(validate({
    ...form,
    [e.target.name]: e.target.value
}))
setForm({
  ...form,
  [e.target.name]: e.target.value
})

}

// TIPEO..
// SE DISPARA HANDLER..
//PIDE EL CAMBIO DE ESTADO
//SE HACE LA VALIDACION
//EL ESTADO CAMBIA 

useEffect(() => {
  const finalTemps = selectedTemps.join(", ");
  const updatedForm = { ...form, temperaments: finalTemps };
  setForm(updatedForm);
}, [selectedTemps]);

const submitHandler = (event) => {

    event.preventDefault();
    
    if (form.name === "") {
      return Swal.fire('Please enter a name')
    }
    if (form.life_span === "") {
      return Swal.fire('Please enter a number of lifespan')
  }
    if (selectedTemps.length == 0) {
    return Swal.fire('Please enter temperaments')
    }
    if (form.weight === "") {
      return Swal.fire('Please enter weight')
      }
   if (form.height === "") {
        return Swal.fire('Please enter height')
        }

    const finalTemps = selectedTemps.join(", ") 
    console.log("final",finalTemps)  


    const updatedForm = {...form, weight:peso, height:altura, temperaments:finalTemps, image:image}
    
    setForm(updatedForm)
    dispatch(harcodedForm(updatedForm));
    console.log(updatedForm);
    Swal.fire({ 
      icon: 'success',
      title: 'Congratulations',
      text: 'You have created a new dog!'})
/*
  axios.post("http://localhost:3001/dogs",updatedForm)
  .then(res => Swal.fire({ 
    icon: 'success',
    title: 'Congratulations',
    text: 'You have created a new dog!'}))
  .catch(err => Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Please try again later!'
  })) */
  

}

  return (
  <form className='FormCont'onSubmit={submitHandler}>

    <div className='returnBtnForm'>
    <Link to={`/home`}><button> <img src={leftArrow}/> GO BACK</button></Link> 
    </div>

    <div className='separator'>
    <div className='formCard'>

        <div className='form'>

              <div className='f1'>
                  <img src={numero1} alt="" />
                  <p>Complete the form</p>
              </div>

              <div className='f2'>
                  <div className='name'>
                      <label htmlFor="">Name : </label>
                      <input type="text" value={form.name} onChange={changeHandler} name="name"/>
                      <span style={{color:"red"}}>{errors.name}</span>
                  </div>
                  <div className='lifeSpan'>
                  <label htmlFor="">Life span :</label>
                      <input type="number" value={form.life_span}  onChange={changeHandler}name="life_span"/>
                      <span style={{color:"red"}}>{errors.life_span}</span>
                 
                  </div>

                  <div>
                      <div className='weight'>
                          <label htmlFor="">Weight :</label>
                          <input  type="number"placeholder='min' onChange={changeTwoHandlers}name="minWeight"/>
                          <span style={{color:"red"}}>{errors.minWeight}</span>
                          <span>-</span>
                          <input type="number" placeholder='max'onChange={changeTwoHandlers}name="maxWeight"/>
                          <span style={{color:"red"}}>{errors.maxWeight}</span>
                      </div>
                      <div className='height'>

                          <label htmlFor="">Height :</label>
                          <input type="number" placeholder='min' onChange={changeTwoHandlers}name="minHeight"/>
                          <span style={{color:"red"}}>{errors.minHeight}</span>
                          <span>-</span>
                          <input type="number"  placeholder='max' onChange={changeTwoHandlers}name="maxHeight"/>
                          <span style={{color:"red"}}>{errors.maxHeight}</span>
                      </div>
                    </div>
              </div>

              <div className='f3'>
                <img src={numero2} alt="" />
                <p>Select a temperament</p>
              </div>

        
        </div>

        <button className="form-btn" onClick={() => {
                }} type="submit">CREATE YOUR DOG</button>

    </div>
    <TempChecks/>
    </div>
  <Footer/>
  </form>
  )
}

export default Form

