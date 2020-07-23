import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddImageRequest } from "../../store/action/imageAction";

const AddImgPopup = (props) => {
  let [imageData, setImageData] = useState("");
  let [file, setFile] = useState("");

  const handlePreviewOfImage = (e) => {
    if (e.target.files.length) {
      setFile((file = URL.createObjectURL(e.target.files[0])));
      setImageData((imageData = e.target.files[0]));
      console.log(imageData, "images", typeof imageData);
    }
  };

  const handleAddImage = () => {
    if (imageData) {
      props.dispatch(handleAddImageRequest(imageData));
      props.close();
    } else {
      alert("please select an image");
    }
  };

  return (
    <>
      <div className="add_image_section ">
        <a className="close" onClick={props.close}>
          &times;
        </a>
        <h3 className="title  my-3 text-center"> Add Image </h3>
        <div className="preview_image">
          {file ? (
            <img src={file} alt="uploaded image" />
          ) : (
            <p>Please choose an image</p>
          )}
        </div>
        <div className="input-group my-3 ">
          <div className="custom-file">
            <label htmlFor="inputGroupFile04"> Select an image</label>
            <input
              type="file"
              id="inputGroupFile04"
              onChange={handlePreviewOfImage}
            />
          </div>
        </div>
        <div className="mt-3 mb-5 btn_section">
          <button
            className="btn btn-secondary mr-2"
            type="button"
            onClick={props.close}>
            Cancel
          </button>
          <button
            className="btn btn-secondary "
            type="button"
            onClick={handleAddImage}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default connect()(AddImgPopup);
