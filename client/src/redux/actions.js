import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY_TEMP ="FILTER_BY_TEMP";
export const FILTER_BY_ORIGIN ="FILTER_BY_ORIGIN";
export const SORT_BY_NAME = "SORT_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
export const SORT_BY_WEIGHT="SORT_BY_WEIGHT";
export const SEARCHBAR = "SEARCHBAR"
export const DEFINE_SELECTED_TEMPS = 'DEFINE_SELECTED_TEMPS'
export const HARCODED_FORM =  'HARCODED_FORM';

export const getDogs = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/dogs');
        const dogs = response.data;
        dispatch({type: GET_DOGS, payload:dogs});
   
   }
}
export const getTemperaments = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/temperaments');
        const temperaments = response.data;
        dispatch({type: GET_TEMPERAMENTS, payload:temperaments});
   
   }
}
;
export const getById = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/dogs/${id}`);
        dispatch({type: GET_BY_ID, payload:response.data});
   
   }
}

export const searchbar = (payload) => {
    return ({
        type: 'SEARCHBAR',
        payload
    })
}

export const filterByTemp = (payload) => {
    return ({
        type: 'FILTER_BY_TEMP',
        payload
    })
}
export const filterByOrigin = (payload) => {
    return ({
        type: 'FILTER_BY_ORIGIN',
        payload
    })
}
export const harcodedForm = (payload) => {
    return ({
        type: 'HARCODED_FORM',
        payload
    })
}




export function sortByName(payload){
    return ({
        type: 'SORT_BY_NAME',
        payload
    })
}
export function sortByWeight(payload){
    return ({
        type: 'SORT_BY_WEIGHT',
        payload
    })
}

export function defineSelectedTemps(payload){
    return ({
        type: 'DEFINE_SELECTED_TEMPS',
        payload
    })
}

/* 
export const getUsers = () => {
  return async function(dispatch) {
    const response = await axios.get('http://localhost:3001/dogs');
    dispatch({type: 'GET_USERS', payload: users});
  }
}*/