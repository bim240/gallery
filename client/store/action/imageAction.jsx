const axios = require("axios").default;

const handleGetAllImagesRequest = () => {
  return async function (dispatch) {
    dispatch({ type: "IMAGE_FETCH_IN_PROGRESS" });
    try {
      var response = await axios.get("/api/v1/image");
      dispatch({ type: "IMAGE_FETCH_SUCCESS", payload: response.data.images });
    } catch (error) {
      dispatch({ type: "IMAGE_FETCH_FAIL" });
    }
  };
};

const handleAddImageRequest = (imageData) => {
  const image = new FormData();
  image.append("image", imageData);

  return async function (dispatch) {
    dispatch({ type: "IMAGE_ADD_IN_PROGRESS" });
    try {
      var response = await axios.post("/api/v1/image", image);

      if (response.data) {
        dispatch({ type: "IMAGE_ADD_SUCCESS", payload: response.data.image });
      } else {
        dispatch({ type: "IMAGE_ADD_FAIL" });
      }
    } catch (error) {
      dispatch({ type: "IMAGE_ADD_FAIL" });
    }
  };
};

export { handleAddImageRequest, handleGetAllImagesRequest };
