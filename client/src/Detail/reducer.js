import { FETCH_SINGLE_APARTMENT , FETCH_SINGLE_APARTMENT_ERROR } from "./constant";

const initialState={
  apartment : {},
  fetchSingleApartmentError : []
}

export const detailReducer =(state=initialState, action)=>{
  switch(action.type){
    case FETCH_SINGLE_APARTMENT:
      console.log("oneapartment" , action.payload)
      return{
        ...state,
        apartment : action.payload
      }
    case FETCH_SINGLE_APARTMENT_ERROR:
      return{
        ...state,
        fetchSingleApartmentError : action.payload
      }
    default:
      return state;
  }
}