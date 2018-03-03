import {ADD_COMMENT, ADD_COMMENT_ERROR, FETCH_SINGLE_APARTMENT, FETCH_SINGLE_APARTMENT_ERROR} from "./constant";

const initialState={
  apartment : {},
  fetchSingleApartmentError : [],
  comment : [],
  commentSuccess : false,
  commentError : ''
}

export const detailReducer =(state=initialState, action)=>{
  switch(action.type){
    case FETCH_SINGLE_APARTMENT:
      return{
        ...state,
        apartment : action.payload,
        commentSuccess:false,
        commentError : ''
      };
    case FETCH_SINGLE_APARTMENT_ERROR:
      return{
        ...state,
        fetchSingleApartmentError : action.payload
      };
    case ADD_COMMENT:
      return{
        ...state,
        comment : action.payload,
        commentSuccess: true
      };
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        commentError: action.payload
      };
    default:
      return state;
  }
};