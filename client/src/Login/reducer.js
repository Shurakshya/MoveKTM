import {LOGIN_USER, LOGIN_USER_ERROR,REQUEST_LOGIN_RESET} from "./constant";

const initialState ={
  loginSuccess : false,
  loginError : '',
  token : ''
}

export const loginReducer=(state=initialState, action)=>{
  switch(action.type){
    case REQUEST_LOGIN_RESET:
      return {
        ...state,
        loginSuccess : false,
        loginError : ''
      }
    case LOGIN_USER :
      return {
        ...state,
        loginSuccess: true,
        loginError: '',
        token : action.payload
      };
    case LOGIN_USER_ERROR :
      // console.log("login reducer error ", action.payload)
      return{
        ...state,
        loginError : action.payload,
        loginSuccess : false
      };
    default:
      return state;
  }
}