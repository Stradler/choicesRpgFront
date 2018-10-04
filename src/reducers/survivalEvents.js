import * as constants from "../constants";

export function survivalEvents(state =  [], action){
  switch (action.type) {
    case constants.API_CALL_REQUEST_SURVIVAL:
      return state;
    case constants.API_CALL_SUCCESS_SURVIVAL:
      return action.events;
    case constants.API_CALL_FAILURE_SURVIVAL:
      return state;
    default:
      return state;
  }
}