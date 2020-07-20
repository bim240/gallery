import React, { useState, useEffect, useRef } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import { connect } from "react-redux";
import { dataURItoBlobToFile } from "../../utils/convertCanvasToFile";
import { handleAddImageRequest } from "../../store/action/imageAction";

const ImageCropper = (props) => {
  let [imageDestination, setImageDestination] = useState("");
  let imageElement = useRef(null);

  let handleUpdateButton = () => {
    let imageData = dataURItoBlobToFile(imageDestination);
    props.dispatch(handleAddImageRequest(imageData));
    props.history.push("/");
  };

  useEffect(() => {
    const cropper = new Cropper(imageElement.current, {
      scalable: false,
      viewMode: 2,
      aspectRatio: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        setImageDestination((imageDestination = canvas.toDataURL("image/png")));
      },
    });
  });

  return (
    <>
      <div className="container row image_cropper_container my-5 mx-auto">
        <div className="source_image col-lg-8 col-md-11 rounded border my-3">
          <img
            ref={imageElement}
            src="https://image.flaticon.com/icons/svg/1590/1590898.svg"
            alt="Source"
            crossOrigin
          />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 destination_image ml-4 rounded border mx-auto my-3">
          <img
            src={imageDestination}
            className="img-preview mt-3"
            alt="Destination"
          />
          <button
            className="btn btn-secondary m-4"
            onClick={handleUpdateButton}>
            Add as new
          </button>
          <button
            className="btn btn-secondary m-4"
            onClick={handleUpdateButton}>
            Replace and Add
          </button>
        </div>
      </div>
    </>
  );
};

export default connect()(ImageCropper);
