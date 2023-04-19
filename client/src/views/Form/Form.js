import React from 'react';
import axios from 'axios';
import { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTemperaments } from '../../redux/actions';
import "./Form.css"
const Form = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  
    
  }, [dispatch]);

const temperaments = useSelector(state => state.temperaments);

const [selectedTemperamentos, setSelectedTemperamentos] = useState([]);

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
  temperaments:""
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
  if(input.name){
      setErrors({...errors, name:""})
  } 
  else {
    setErrors({...errors, name:"* este campo es obligatorio"}) 
  }
  
  return errors;
}


const handleTemperamentoChange = (event) => {
  const value = event.target.value;

  if (selectedTemperamentos.includes(value)) {
    setSelectedTemperamentos(selectedTemperamentos.filter((temperamento) => temperamento !== value));
  } else {
    setSelectedTemperamentos([...selectedTemperamentos, value]);
  }
};


const changeHandler = (event) => {
  const property = event.target.name;
  const value=event.target.value;

  validate({...form, [property]: value})
  setForm({...form, [property]: value})
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

const submitHandler = (event) => {

    event.preventDefault();

    const updatedForm = {...form, weight:peso, height:altura, temperaments: selectedTemperamentos.join(", ")}
    setForm(updatedForm)
    
    axios.post("http://localhost:3001/dogs",updatedForm)
    .then(res => alert("ok",res))
    .catch(err => alert("err",err))
    
    console.log(form);
    if (form.name === "") {
      return alert("Por favor ingrese un nombre de plato")
  }
  
}

  return (
  <form className='FormCont'onSubmit={submitHandler}>
  <div className='bigInputs' >
    <label htmlFor="">NOMBRE</label>
    <input type="text" value={form.name} onChange={changeHandler} name="name"/>
    <span>{errors.name}</span>
      
    <label htmlFor="">AÑOS DE VIDA</label>
    <input type="text" value={form.life_span}  onChange={changeHandler}name="life_span"/>

    <label htmlFor="">PESO </label>
    <div className='shortInputs' >
      min: <input type="text" onChange={changeTwoHandlers}name="minWeight"/>
      max: <input type="text" onChange={changeTwoHandlers}name="maxWeight"/>
    </div>
    <label htmlFor="">ALTURA</label>
    <div className='shortInputs' >
      min:<input type="text"  onChange={changeTwoHandlers}name="minHeight"/>
      max:<input type="text"  onChange={changeTwoHandlers}name="maxHeight"/>
    </div>

    <button className="form-btn" onClick={() => {
      console.log(selectedTemperamentos)
    }} type="submit">CREAR</button></div>
  
<div className="containercheck">   <label style={{color:"rgb(46, 161, 161)"}}>TEMPERAMENTOS:</label>
    {temperaments.map((temperamento) => (
        <div key={temperamento}>
          <label>
            <input
              name={temperamento}
              type="checkbox"
              value={temperamento}
              checked={selectedTemperamentos.includes(temperamento)}
              onChange={handleTemperamentoChange}
            />
            {temperamento}
          </label>
        </div>
      ))}
  
                    </div> 
   
  </form>
  )
}

export default Form

