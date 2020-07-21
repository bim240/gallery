import React, { useState, useEffect, useRef } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import { connect } from "react-redux";
import { dataURItoBlobToFile } from "../../utils/convertCanvasToFile";
import {
  handleAddImageRequest,
  handleDeleteImageRequest,
} from "../../store/action/imageAction";

const ImageCropper = (props) => {
  let [imageDestination, setImageDestination] = useState("");
  let imageElement = useRef(null);
  let imageIdToBeCropped = props.match.params.id;
  let imageToBeCropped =
    props.images &&
    props.images.filter((image) => image._id == imageIdToBeCropped)[0];

  let handleUpdateButton = () => {
    let imageData = dataURItoBlobToFile(imageDestination);
    props.dispatch(handleAddImageRequest(imageData));
    props.history.push("/");
  };
  let handleDeleteOldAndAddNewImg = (imageId) => {
    handleUpdateButton();
    props.dispatch(handleDeleteImageRequest(imageId));
    props.history.push("/");
  };

  useEffect(() => {
    if (imageToBeCropped) {
      const cropper = new Cropper(imageElement.current, {
        movable: true,
        rotatable: true,
        scalable: false,
        viewMode: 2,
        aspectRatio: 1,
        crop: () => {
          const canvas = cropper.getCroppedCanvas();
          setImageDestination(
            (imageDestination = canvas.toDataURL("image/png"))
          );
        },
      });
    }
  });

  return (
    <>
      {imageToBeCropped ? (
        <div className="container row image_cropper_container my-5 mx-auto">
          <div className="source_image col-lg-8 col-md-11 rounded border my-3">
            <img
              ref={imageElement}
              src={`/uploads/${imageToBeCropped.imageName}`}
              alt="Source"
              crossOrigin="true"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 destination_image ml-4 rounded border mx-auto my-3">
            <img
              src={imageDestination}
              className="img-preview mt-3"
              alt="Destination"
            />
            <button
              className="btn btn-secondary m-4 btn_background"
              onClick={handleUpdateButton}>
              Add as new
            </button>
            <button
              className="btn btn-secondary m-4 btn_background"
              onClick={() => handleDeleteOldAndAddNewImg(imageToBeCropped._id)}>
              Replace and Add new
            </button>
            <button
              className="btn btn-secondary m-4 btn_background"
              onClick={() => props.history.push("/")}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}
export default connect(mapStateToProps)(ImageCropper);
