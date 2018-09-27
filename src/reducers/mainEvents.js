import * as constants from "../constants";

const initialState = {
  fetching: false,
  events: null,
  error: null
};

export function mainEvents(state =  initialState, action){
  switch (action.type) {
    case constants.API_CALL_REQUEST_MAIN:
      return { ...state, fetching: true, error: null };
    case constants.API_CALL_SUCCESS_MAIN:
      return { ...state, fetching: false, events: action.events };
    case constants.API_CALL_FAILURE_MAIN:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
}