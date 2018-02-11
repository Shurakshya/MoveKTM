import {FETCH_APARTMENTS, FETCH_APARTMENTS_ERROR} from './constant';

const initialState={
  apartments : [],
  fetchApartmentsError : ''
};

export const homeReducer = (state=initialState,action)=>{
  switch(action.type){
    case  FETCH_APARTMENTS:
      return{
        ...state,
        apartments: action.payload
      }
    case FETCH_APARTMENTS_ERROR:
      return{
        ...state,
        fetchApartmentsError : 'something went wrong!'
      }
    default :
      return state;
  }
}