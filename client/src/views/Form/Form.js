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

const handleTemperamentoChange = (event) => {
  const value = event.target.value;

  if (selectedTemperamentos.includes(value)) {
    setSelectedTemperamentos(selectedTemperamentos.filter((temperamento) => temperamento !== value));
  } else {
    setSelectedTemperamentos([...selectedTemperamentos, value]);
  }
};

const peso = {
  "imperial": "9 - 11.5",
  "metric": "23 - 29"
}
const altura = {
  "imperial": "9 - 11.5",
  "metric": "23 - 29"
}

const [form,setForm] = useState({
name:"",
height:altura,
weight:peso,
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
    setErrors({...errors, name:"Tiene que tener un nombre"}) 
  }
  

  return errors;
}
const changeHandler = (event) => {
  const property = event.target.name;
  const value=event.target.value;
  validate({...form, [property]: value})
  setForm({...form, [property]: value})
}

// TIPEO..
// SE DISPARA HANDLER..
//PIDE EL CAMBIO DE ESTADO
//SE HACE LA VALIDACION
//EL ESTADO CAMBIA 
const submitHandler = (event) => {

    event.preventDefault();
    //axios.post("http://localhost:3001/dogs",form)
    //.then(res => alert(res))
    //.catch(err => alert(err))

    setForm({...form, temperaments: selectedTemperamentos.join(", ")})
  
    console.log(form);
    if (form.name === "") {
      return alert("Por favor ingrese un nombre de plato")
  }
  
}

  return (
  <form onSubmit={submitHandler}>
  <div>
    <label htmlFor="">Nombre</label>
    <input type="text" value={form.name} onChange={changeHandler} name="name"/>
    <span>{errors.name}</span>
  </div>
  <div>
    <label htmlFor="">Altura</label>
    <input type="text" value={form.height}  onChange={changeHandler} name="height"/></div>
  <div>
    <label htmlFor="">Peso</label>
    <input type="text" value={form.weight}  onChange={changeHandler}name="weight"/></div>
    <div>
    <label htmlFor="">Años de vida</label>
    <input type="text" value={form.life_span}  onChange={changeHandler}name="life_span"/></div>
  
<div className="containercheck">   <label>Temperamentos:</label>
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
    <button onClick={() => {
      console.log(selectedTemperamentos)
    }} type="submit">CREAR</button>
  </form>
  )
}

export default Form

