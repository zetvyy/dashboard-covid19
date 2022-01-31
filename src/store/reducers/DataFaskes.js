import { GET_DATA_FASKES } from "../types";

const initialState = {
  data: [],
};

const DataFaskes = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA_FASKES:
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

export default DataFaskes;
