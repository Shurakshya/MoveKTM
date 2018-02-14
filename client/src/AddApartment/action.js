import axios from 'axios';
import {ADD_APARTMENT, ADD_APARTMENT_ERROR} from './constant'

const ROOT_URL = 'http://localhost:3001/api';

export function addApartment(values) {
  console.log('values ',values);
  return(dispatch)=>{
    return axios.post(`${ROOT_URL}/apartments` , values)
      .then((response)=>{
        console.log("add apartment", response.data);
        dispatch({
          type: ADD_APARTMENT,
          payload : response.data
        })
      }).catch((err)=>{
        console.log("add apartment error", err.response.data);
        dispatch({
          type: ADD_APARTMENT_ERROR,
          payload: err.response.data
        })
      })
  }
}