let initialState = {
  isDataFetchInProgress: false,
  images: [],
};

export default function images(state = initialState, action) {
  switch (action.type) {
    case "DATA_FETCH_IN_PROGRESS":
      return { ...state, isDataFetchInProgress: true };
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        images: action.payload,
        isDataFetchInProgress: false,
      };
    case "DATA_FETCH_FAIL":
      return {
        ...state,
        isDataFetchInProgress: false,
      };
    default:
      return state;
  }
}
