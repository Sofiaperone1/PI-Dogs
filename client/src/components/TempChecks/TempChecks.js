import React, { useState, useEffect } from 'react';

import "./TempChecks.css"
import { useSelector, useDispatch } from 'react-redux';
import { getTemperaments, defineSelectedTemps } from '../../redux/actions';

const TempChecks = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTemperaments());
    
      
    }, [dispatch]);
  
  const temperaments = useSelector(state => state.temperaments);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (event) => {
    const options = Array.from(event.target.selectedOptions).map(option => option.value);
    setSelectedOptions([...selectedOptions, ...options]);
   
  };

  useEffect(() => {
    dispatch(defineSelectedTemps(selectedOptions)); // Realiza el dispatch cuando selectedOptions cambie
  }, [selectedOptions, dispatch]);


  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter(item => item !== option);
    setSelectedOptions(updatedOptions);
  };

  return (
   <div className="TempsContainer">
    
    <div className='sideText'>
    <p className='texto-costado'>TEMPERAMENTS</p>
    </div>

    <select className='tempList' multiple value={selectedOptions} onChange={handleSelectChange}>
     {temperaments.map((temperamento) => 
      <option key ={temperamento} value={temperamento}>{temperamento}</option>
      )}
    </select>
    
      <div className="selectedTemps">
        {selectedOptions.map(option => (
          <div key={option}>
            <span>{option}</span>
            <button onClick={() => handleRemoveOption(option)}>X</button>
          </div>
        ))}
      </div>
 
  </div>
  );
};


export default TempChecks;