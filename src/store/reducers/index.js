import { combineReducers } from "redux";
import DataFaskes from "./DataFaskes";
import FilterCityReducer from "./FilterCityReducer";
import FilterReducer from "./FIlterReducer";

export default combineReducers({
  filter: FilterReducer,
  filterr: FilterCityReducer,
  faskes: DataFaskes,
});
