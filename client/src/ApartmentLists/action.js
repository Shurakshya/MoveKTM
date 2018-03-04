import axios from 'axios';
import {FETCH_APARTMENTS_BY_CATEGORY, FETCH_APARTMENTS_BY_CATEGORY_ERROR} from "./constant";

const ROOT_URL = 'http://localhost:3001/api';

export const fetchApartmentByCategory = (category) =>{
  const request = axios.get(`${ROOT_URL}/apartments/category/${category}`);
  return (dispatch)=>{
    return request
      .then((response)=>{
        const { data } = response.data;
        dispatch({
          type : FETCH_APARTMENTS_BY_CATEGORY,
          payload : data
        })
      }).catch((err)=>{
        if(err.response) {
          dispatch({
            type: FETCH_APARTMENTS_BY_CATEGORY_ERROR,
            payload: err.response.data.message
          })
        }else{
          dispatch({
            type: FETCH_APARTMENTS_BY_CATEGORY_ERROR,
            payload: 'Sorry, Please try again!!!'
          })
        }
      })
  }
};