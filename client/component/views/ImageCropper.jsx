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
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        setImageDestination((imageDestination = canvas.toDataURL("image/png")));
      },
    });
  });

  return (
    <>
      <div className="container">
        <div className="img-container ">
          <img
            ref={imageElement}
            src="https://image.flaticon.com/icons/svg/1590/1590898.svg"
            alt="Source"
            crossorigin
          />
        </div>
        <img src={imageDestination} className="img-preview" alt="Destination" />
        <button className="btn btn-secondary" onClick={handleUpdateButton}>
          submit
        </button>
      </div>
    </>
  );
};

export default connect()(ImageCropper);
