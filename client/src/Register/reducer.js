import { REGISTER_USER, REGISTER_USER_ERROR }from './constant';

const initialState={
  registerError : '',
  registerSuccess: false
}

export const registerReducer=(state=initialState, action)=>{
  switch(action.type){
    case REGISTER_USER:
      return {
        ...state,
        registerSuccess : true,
        registerError : ''
      }
    case REGISTER_USER_ERROR:
      return{
        registerError: action.payload,
        registerSuccess : false
      }
    default:
      return state
  }
}
