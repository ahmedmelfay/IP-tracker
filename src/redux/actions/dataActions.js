import axios from "axios";

export const fetchedData = (dataURL) => {
  return (dispatch, getState) => {
    return axios
      .get(dataURL)
      .then(({ data }) => {
        dispatch({ type: "FETCH_DATA", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "IP_ERR", payload: err });
      });
  };
};
