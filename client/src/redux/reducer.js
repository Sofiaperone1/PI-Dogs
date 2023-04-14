import {FILTER_BY_ORIGIN, FILTER_BY_TEMP, GET_DOGS, GET_TEMPERAMENTS, SORT_BY_NAME, GET_BY_ID} from "./actions.js"

const initialState = {
    dogs:[],
    temperaments:[],
    dogById:{}
};

const rootReducer = (state = initialState ,action) => {
switch(action.type) {
    case GET_DOGS:  return {...state, dogs: action.payload};
    
    case GET_TEMPERAMENTS:  return {...state, temperaments: action.payload};
    
    case FILTER_BY_TEMP:    
    const result = state.dogs;
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
const resultOrigin = state.dogs;

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
};

case SORT_BY_NAME:
            let arrOrdenado = action.payload === "asc" ?
                state.dogs.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                }) : state.dogs.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                dogs: arrOrdenado
            };

    case GET_BY_ID:
            return {
                ...state,
                dogById: action.payload
            }

    default:
        return {...state}
}
}

export default rootReducer;
