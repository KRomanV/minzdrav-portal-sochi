import { combineReducers } from "redux";
import { doctorsReducer } from "./doctorReducer";
import { covidReducer } from "./covidReducer";
import { newsReducer } from "./newsReducer";
import { userReducer } from "./userReducer";
import { appointmentsReducer } from "./appointments";


export const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  doctors: doctorsReducer,
  covid: covidReducer,
  appointments: appointmentsReducer,

});
