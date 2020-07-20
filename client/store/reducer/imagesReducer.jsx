let initialState = {
  isImageFetchInProgress: false,
  addImageInProgress: false,
  images: [],
  error: "",
};

export default function images(state = initialState, action) {
  switch (action.type) {
    case "IMAGE_FETCH_IN_PROGRESS":
      return { ...state, isImageFetchInProgress: true };
    case "IMAGE_FETCH_SUCCESS":
      return {
        ...state,
        images: action.payload,
        isImageFetchInProgress: false,
      };
    case "IMAGE_FETCH_FAIL":
      return {
        ...state,
        isImageFetchInProgress: false,
        error: "images fetching failed",
      };
    case "IMAGE_ADD_IN_PROGRESS":
      return {
        ...state,
        addImageInProgress: true,
        error: "",
      };
    case "IMAGE_ADD_SUCCESS":
      return {
        ...state,
        images: state.images.concat(action.payload),
        addImageInProgress: false,
        error: "",
      };
    case "IMAGE_ADD_FAIL":
      return {
        ...state,
        isImageFetchInProgress: false,
        error: "Failed to upload the images",
      };
    case "IMAGE_DELETE_FAIL":
      return {
        ...state,
        error: "Failed to upload the images",
      };
    case "IMAGE_DELETE_SUCCESS":
      return {
        ...state,
        images: state.images.filter((image) => image._id !== action.payload),
        error: "",
      };
    default:
      return state;
  }
}
