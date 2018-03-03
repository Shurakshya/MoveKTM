import axios from 'axios';
import {LOGIN_USER, LOGIN_USER_ERROR,REQUEST_LOGIN_RESET} from "./constant";

const ROOT_URL = 'http://localhost:3001/api';

export function loginUser(values){
  return (dispatch)=>{
    return axios.post(`${ROOT_URL}/login` , values)
      .then((response)=>{
        dispatch({
          type : LOGIN_USER,
          payload : response.data.token
        })
      }).catch((err)=>{
        console.log("login action error" , err.response.data.message)
        // const { message } = err.response.data;
        dispatch({
          type: LOGIN_USER_ERROR,
          payload : err.response.data.message
        })
      })
  }
}

export const resetLogin=()=>{
  return {
    type : REQUEST_LOGIN_RESET
  }
};