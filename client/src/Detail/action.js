import axios from 'axios';
import {FETCH_SINGLE_APARTMENT , FETCH_SINGLE_APARTMENT_ERROR } from './constant';

const ROOT_URL = 'http://localhost:3001/api';

export function fetchSingleApartment(id){
  const request = axios.get(`${ROOT_URL}/apartments/${id}`);
  return(dispatch) =>{
    return request
      .then((response)=>{
        const {data} = response.data
        dispatch({
          type : FETCH_SINGLE_APARTMENT,
          payload : data
        }).catch((err)=>{
          dispatch({
            type : FETCH_SINGLE_APARTMENT_ERROR,
            payload : err.response.data.message
          })
        })
    })
  }
}