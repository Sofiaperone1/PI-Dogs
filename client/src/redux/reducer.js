import {HARCODED_FORM,DEFINE_SELECTED_TEMPS,SEARCHBAR, FILTER_BY_ORIGIN, FILTER_BY_TEMP, GET_DOGS, GET_TEMPERAMENTS, SORT_BY_NAME,SORT_BY_WEIGHT, GET_BY_ID} from "./actions.js"
import perros from "../dogs.js";
import temperamentos from "../temperaments.js";
/*
const initialState = {
    dogs:[],
    temperaments:[],
    selectedTemps:[],
    dogById:{},
    allDogs:[]
};*/


const initialState = {
  dogs:perros,
  temperaments:temperamentos,
  selectedTemps:[],
  dogById:{},
  allDogs:perros,
};

const rootReducer = (state = initialState ,action) => {
switch(action.type) {
    case GET_DOGS:  return {...state, dogs: action.payload, allDogs:action.payload};
    
    case GET_TEMPERAMENTS:  return {...state, temperaments: action.payload};
    
    case HARCODED_FORM: 
    const prevForm = state.allDogs
    prevForm.push(action.payload)
    return {
      ...state,
      dogs: prevForm
    }

    case FILTER_BY_TEMP:    
    const result = state.allDogs;
    if (action.payload === "Todos") {
        console.log(action.payload)
        return {
            ...state,
            dogs: result,
        }
    } else {
        const filteredDogs=[];
        result.map((dog) => {
            const temperament = dog.temperament;
           if (temperament !== undefined) {
           const array = temperament.split(", ");
          
            const included = array.includes(action.payload);
           
            if (included === true) {filteredDogs.push(dog)}
            
        }});
        return {...state, dogs: filteredDogs};
};

case FILTER_BY_ORIGIN:  
/*const resultOrigin = state.dogs;
console.log(resultOrigin)
if (action.payload === "Todos") {
    console.log(action.payload)
    return {
        ...state,
        dogs: resultOrigin,}
} 
else if (action.payload === "Bases de datos") {
    console.log(action.payload)
    const filteredDbDogs=[];

    resultOrigin.map((dog) => {
        if (dog.created === true) {
            filteredDbDogs.push(dog)
        }       
    })
    return {...state, dogs: filteredDbDogs};
}
else {
    console.log(action.payload)
    const filteredApiDogs=[];
    resultOrigin.map((dog) => {
        if (dog.created === false) {
            filteredApiDogs.push(dog)
        }       
    })
    return {...state, dogs: filteredApiDogs};
};*/

case SORT_BY_NAME:
        let dogs = [...state.dogs]; // Hacer una copia del arreglo original
        if (action.payload === 'desc') {
          dogs.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
        } else if (action.payload === 'asc') {
          dogs.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
        }
        return {
          ...state,
          dogs: dogs,
        };


            case SORT_BY_WEIGHT:
            
                const toOrder = [];
                
                console.log(action.payload)
                state.dogs.forEach((dog) => {  
                    const numbers = dog.weight.imperial.split(" - ").map(num => parseInt(num))
                    const average = (numbers[0] + numbers[1]) / 2
                    toOrder.push( {...dog, averageWeight: average})
                })
                let arrOrdenado2 = action.payload === "asc" ?
                toOrder.sort((a, b) => b.averageWeight - a.averageWeight) :
                toOrder.sort((a, b) => a.averageWeight - b.averageWeight);

                return {
                    ...state,
                    dogs: arrOrdenado2
                };
            ;

    case GET_BY_ID:
            return {
                ...state,
                dogById: action.payload
            };

    case SEARCHBAR:
        let filter = action.payload
        let allDogs= state.allDogs;
        
        const filteredDogs = allDogs.filter(dog =>
        dog.name.toLowerCase().includes(filter.toLowerCase()))

            return {
               ...state,   
               dogs: filteredDogs         
                };

    case DEFINE_SELECTED_TEMPS:
      return{
          ...state,
          selectedTemps:action.payload
      }

    default:
        return {...state}
}
}

export default rootReducer;
