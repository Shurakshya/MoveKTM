import {combineReducers} from 'redux';
import {homeReducer} from './Home/reducer';
import {detailReducer} from "./Detail/reducer";

const rootReducer = combineReducers({
  home : homeReducer,
  detail : detailReducer
});

export default rootReducer;
