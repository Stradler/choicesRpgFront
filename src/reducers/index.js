import {combineReducers} from "redux";
import {mainEvents} from "./mainEvents";
import {error} from "./error";
import {fetching} from "./fetching";
import {survivalEvents} from "./survivalEvents";
import {AGE} from "./age";
import {HP} from "./hp";
import {MONEY} from "./money";



export default combineReducers({
  mainEvents,
  error,
  fetching,
  survivalEvents,
  AGE,
  HP,
  MONEY
});