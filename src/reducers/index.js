import {combineReducers} from "redux";
import {mainEvents} from "./mainEvents";
import {error} from "./error";
import {fetching} from "./fetching";
import {survivalEvents} from "./survivalEvents";
import * as constants from "../constants";


const ageReducer = function(state = 0.0, action){
  switch(action.type){
    default:
      return state;
  }
}

const hpReducer = function(state = 50, action){
  switch(action.type){
    default:
      return state;
  }
}

const moneyReducer = function(state = 0, action){
  switch(action.type){
    default:
      return state;
  }
}
export default combineReducers({
  mainEvents,
  error,
  fetching,
  survivalEvents,
  AGE: ageReducer,
  HP: hpReducer,
  MONEY:moneyReducer
});