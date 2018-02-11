import axios from 'axios';
import {FETCH_APARTMENTS, FETCH_APARTMENTS_ERROR} from './constant';

const ROOT_URL = 'http://localhost:3001/api';

export function fetchApartments(){
  return (dispatch) =>{
    return axios.get(`${ROOT_URL}/apartments`)
      .then((response)=>{
        const {data} = response.data
        dispatch({
          type : FETCH_APARTMENTS,
          payload : data
        });
      }).catch((err)=>{
        console.log('error');
        dispatch({
          type : FETCH_APARTMENTS_ERROR,
          payload : err.response
        });
    });
  }

}