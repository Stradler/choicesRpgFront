import * as constants from "../constants";
import {createActions} from "redux-actions";

export const changeAGE = (age) => {
  return{
    type: constants.CHANGE_AGE,
    payload: {
      age
    }
  }
}

export const changeMONEY = (money) => {
  return{
    type: constants.CHANGE_MONEY,
    payload: {
      money
    }
  }
}

export const changeHP = (hp) => {
  return{
    type: constants.CHANGE_HP,
    payload: {
      hp
    }
  }
}