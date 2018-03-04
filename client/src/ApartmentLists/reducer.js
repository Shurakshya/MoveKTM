import {FETCH_APARTMENTS_BY_CATEGORY , FETCH_APARTMENTS_BY_CATEGORY_ERROR} from "./constant";

const initialState={
  apartmentLists : [],
  apartmentListsError : ''
};

export const categoryReducer = (state = initialState , action) =>{
  switch(action.type){
    case FETCH_APARTMENTS_BY_CATEGORY :
      return{
        ...state,
        apartmentLists: action.payload
      };
    case FETCH_APARTMENTS_BY_CATEGORY_ERROR :
      return{
        ...state,
        apartmentListsError: action.payload
      };
    default :
      return state;
  }
};