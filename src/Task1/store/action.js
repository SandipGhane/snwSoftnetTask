import {
  FETCH_PICS_FAILED,
  FETCH_PICS_STARTED,
  FETCH_PICS_SUCCESS,
} from "./actionTypes";

import axios from "axios";

export const fetchData = () => {
  console.log("fetch function");
  return (dispatch) => {
    dispatch(fetchDataStarted());
    console.log("axios");
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDataFailed(err.message));
      });
  };
};
const fetchDataStarted = () => {
  console.log("starded");
  return {
    type: FETCH_PICS_STARTED,
    payload: {
      isLoading: true,
    },
  };
};

const fetchDataFailed = (error) => {
  //   console.log("error", error);
  return {
    type: FETCH_PICS_FAILED,
    payload: {
      error,
    },
  };
};

const fetchDataSuccess = (data) => {
  //   console.log("data", data);
  return {
    type: FETCH_PICS_SUCCESS,
    payload: {
      data,
    },
  };
};
