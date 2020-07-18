import React, { useState } from "react";

const AddImgPopup = (props) => {
  let [file, setFile] = useState("");

  const handlePreviewOfImage = (e) => {
    // console.dir(e.target.files.length, "length of file");
    if (e.target.files.length) {
      setFile((file = URL.createObjectURL(e.target.files[0])));
    }
    console.log(file);
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
          <button className="btn btn-secondary " type="button">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddImgPopup;
