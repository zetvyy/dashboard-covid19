import { GET_PROVINSI } from "../types";

const initialState = {
  data: [],
};

const FilterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROVINSI:
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

export default FilterReducer;
