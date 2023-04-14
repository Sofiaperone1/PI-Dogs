import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY_TEMP ="FILTER_BY_TEMP";
export const FILTER_BY_ORIGIN ="FILTER_BY_ORIGIN";
export const SORT_BY_NAME = "SORT_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"

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


export function sortByName(payload){
    return ({
        type: 'SORT_BY_NAME',
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