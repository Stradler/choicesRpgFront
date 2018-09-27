import {combineReducers} from "redux";
import {mainEvents} from "./mainEvents";
import {error} from "./error";
import {fetching} from "./fetching";

export default combineReducers({
  mainEvents,
  error,
  fetching
});