import axios from "axios";
import { GET_PROVINSI } from "../types";

export const getProvinsi = () => {
  const url = "https://kipi.covid19.go.id/api/get-province";
  return async (dispatch) => {
    try {
      const response = await axios({
        url: url,
        method: "POST",
      });
      dispatch({
        type: GET_PROVINSI,
        payload: response.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
