import countryNameReducer from "./country/countryInfo";
import slotMachineReducer from "./slotMachine";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  countryInfo: countryNameReducer,
  slotMachine: slotMachineReducer,
});

export default allReducers;
