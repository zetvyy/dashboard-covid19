import { GET_DATA_FASKES } from "../types";
import axios from "axios";

export const getDataFaskes = () => {
  const url = "https://kipi.covid19.go.id/api/get-faskes-vaksinasi";
  return async (dispatch) => {
    try {
      const response = await axios({
        url: url,
        method: "GET",
      });
      dispatch({
        type: GET_DATA_FASKES,
        payload: response.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
