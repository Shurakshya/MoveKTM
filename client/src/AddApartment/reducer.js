import {ADD_APARTMENT, ADD_APARTMENT_ERROR} from './constant';

const initialState={
  addApartmentError : ""

}

export const addApartmentReducer=(state=initialState, action)=>{
  switch(action.type){
    case ADD_APARTMENT :
      return {
        ...state
      }
    case ADD_APARTMENT_ERROR :
      return {
        ...state,
        addApartmentError : action.payload
      }
    default:
      return state;
  }
}