import {LOGIN_USER, LOGIN_USER_ERROR} from "./constant";

const initialState ={
  loginSuccess : false,
  loginError : ''

}

export const loginReducer=(state=initialState, action)=>{
  switch(action.type){
    case LOGIN_USER :
      return {
        ...state,
        loginSuccess: true,
        loginError: ''
      };
    case LOGIN_USER_ERROR :
      return{
        ...state,
        loginError : action.payload,
        loginSuccess : false
      };
    default:
      return state;
  }
}