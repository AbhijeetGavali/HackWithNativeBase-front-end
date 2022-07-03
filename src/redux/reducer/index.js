import { combineReducers } from "redux";
import userReducer from "./user";
import profileReducer from "./profile";
import cardReducer from "./card";

export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  card: cardReducer,
});
