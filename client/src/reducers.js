import {combineReducers} from 'redux';
import {homeReducer} from './Home/reducer';
import {detailReducer} from "./Detail/reducer";
import {registerReducer} from "./Register/reducer";
import {loginReducer} from "./Login/reducer";

const rootReducer = combineReducers({
  home : homeReducer,
  detail : detailReducer,
  register : registerReducer,
  login : loginReducer
});

export default rootReducer;
