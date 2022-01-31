import { GET_CITY } from "../types";

const initialState = {
  data: [],
};

const FilterCityReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CITY:
      return {
        ...state,
        data: payload,
      };
    default: {
      return {
        ...state,
        payload,
      };
    }
  }
};

export default FilterCityReducer;
