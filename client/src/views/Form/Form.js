import React from 'react';
import axios from 'axios';
import { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTemperaments } from '../../redux/actions';
import "./Form.css"
import TempChecks from '../../components/TempChecks/TempChecks';
import leftArrow from "../../imgs/leftArrow.png"
import { Link } from "react-router-dom";
import numero1 from "../../imgs/numero1.png"
import numero2 from "../../imgs/numero2.png"
import Swal from 'sweetalert2'

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
  "imperial": `${minWeight} - ${maxWeight}`,
  "metric": "23 - 29"
}
const altura = {
  "imperial": `${minHeight} - ${maxHeight}`,
  "metric": "23 - 29"
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
    if(!input.name){
        errors.name="Required name";
    } if(!input.life_span){
        errors.life_span="Required life span";
    } if(input.maxHeight > 100 ){
        errors.maxHeight = "El Healt Score debe ser entre 0 y 100";
    }
    
    return errors;
}



const changeHandler = (e) => {
  //const property = event.target.name;
  //const value=event.target.value;

  //validate({...form, [property]: value})
  //setForm({...form, [property]: value})

setErrors(validate({
    ...form,
    [e.target.name]: e.target.value
}))
setForm({
  ...form,
  [e.target.name]: e.target.value
})
}

const changeTwoHandlers = (event) => {
  const property = event.target.name;
  const value=event.target.value;
  
if (property === "maxWeight") {
  setMaxWeight(value)
  console.log("soy max")
}
else if (property === "maxHeight") {
  setMaxHeight(value)
  console.log("soy max")
}
else if (property ==="minHeight") {
  setMinHeight(value) 
  console.log("soy min")
}
else { setMinWeight(value) 
  console.log("soy min")}
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
      return Swal.fire('Por favor ingrese un nombre')
    }
    if (form.life_span === "") {
      return Swal.fire('Por favor ingrese un numero de años')
  }
    if (selectedTemps.length == 0) {
    return Swal.fire('Por favor ingrese temperamentos')
 
    }

    const finalTemps = selectedTemps.join(", ") 
    console.log("final",finalTemps)  

    const updatedForm = {...form, weight:peso, height:altura, temperaments:finalTemps}

    setForm(updatedForm)
    
    console.log(form);

  axios.post("http://localhost:3001/dogs",updatedForm)
  .then(res => Swal.fire( 
    'The Internet?',
    'That thing is still around?',
    'succes'))
  .catch(err => Swal.fire({
    icon: 'error',
    title: 'Hubo un error',
    text: 'Porfavor intenta nuevamente mas tarde!'
  }))
  

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
                      <input type="text" value={form.life_span}  onChange={changeHandler}name="life_span"/>
                      <span style={{color:"red"}}>{errors.life_span}</span>
                 
                  </div>

                  <div>
                      <div className='weight'>
                          <label htmlFor="">Weight :</label>
                          <input  type="text"placeholder='min' onChange={changeTwoHandlers}name="minWeight"/>
                          <span>-</span>
                          <input type="text" placeholder='max'onChange={changeTwoHandlers}name="maxWeight"/>
                      </div>
                      <div className='height'>

                          <label htmlFor="">Height :</label>
                          <input type="text" placeholder='min' onChange={changeTwoHandlers}name="minHeight"/>
                          <span>-</span>
                          <input type="text"  placeholder='max' onChange={changeTwoHandlers}name="maxHeight"/>
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
  </form>
  )
}

export default Form

