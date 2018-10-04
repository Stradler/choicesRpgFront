import * as constants from "../constants";
import {createActions} from "redux-actions";

export const {changeMONEY, changeHP, changeAGE} = createActions({
  [constants.CHANGE_MONEY]: money => ({money}),
  [constants.CHANGE_HP]: hp => ({hp}),
  [constants.CHANGE_AGE]: age => ({age})
});