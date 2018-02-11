import {combineReducers} from 'redux';
import {homeReducer} from './Home/reducer';
import {detailReducer} from "./Detail/reducer";
import {registerReducer} from "./Register/reducer";

const rootReducer = combineReducers({
  home : homeReducer,
  detail : detailReducer,
  register : registerReducer
});

export default rootReducer;
