import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST_MAIN", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchMainEvents() {
  return axios({
    method: "get",
    url: "https://heroku-choices-rpg.herokuapp.com/"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchMainEvents);
    const events = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS_MAIN", events });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE_MAIN", error });
  }
}