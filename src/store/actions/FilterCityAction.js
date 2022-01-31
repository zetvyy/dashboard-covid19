import axios from "axios";
import { GET_CITY } from "../types";

export const getCity = () => {
  const url = "https://kipi.covid19.go.id/api/get-city";
  return async (dispatch) => {
    try {
      const response = await axios({
        url: url,
        method: "POST",
      });
      dispatch({
        type: GET_CITY,
        payload: response.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
