const axios = require("axios").default;

const handleAddImageRequest = (imageData) => {
  const image = new FormData();
  image.append("image", imageData);

  return async function (dispatch) {
    try {
      var response = await axios.post("/api/v1/image", image);
      console.log(response, response);
    } catch (error) {
      console.log(error, "error");
      dispatch({ type: "DATA_FETCH_FAIL" });
    }
    // console.log(image);
  };
};

export { handleAddImageRequest };
