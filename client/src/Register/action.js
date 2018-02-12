import axios from 'axios';
import { REGISTER_USER, REGISTER_USER_ERROR }from './constant';

const ROOT_URL = 'http://localhost:3001/api';

export function registerUser(values) {
  return(dispatch)=>{
    return axios.post(`${ROOT_URL}/register` , values)
      .then((response)=>{
        const {message} = response.data
        dispatch({
          type: REGISTER_USER,
          payload : message
        })
      }).catch((err)=>{
        const { message } = err.response.data
        console.log("sparta " , err.response);
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: message
        })
      })
  }
}