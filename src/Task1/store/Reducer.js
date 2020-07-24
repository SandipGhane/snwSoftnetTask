import {
  FETCH_PICS_STARTED,
  FETCH_PICS_FAILED,
  FETCH_PICS_SUCCESS,
} from "./actionTypes";

const initialState = {
  photos: [],
  isLoading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICS_STARTED:
      console.log("loading");
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PICS_SUCCESS:
      console.log("payload", action.payload.data);
      return {
        ...state,
        error: null,
        isLoading: false,
        photos: action.payload.data,
      };
    case FETCH_PICS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
