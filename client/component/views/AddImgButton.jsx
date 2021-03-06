import React from "react";
import { MdAddAPhoto } from "react-icons/md";
import Popup from "reactjs-popup";
import AddImgPopup from "./AddImgPopup";

const AddImgButton = () => {
  return (
    <div>
      <Popup
        trigger={
          <div className="add_image_button" title="Add Image">
            <MdAddAPhoto />{" "}
          </div>
        }
        modal>
        {(close) => <AddImgPopup close={close} />}
        {/* <div>Popup content here !!</div> */}
      </Popup>
    </div>
  );
};

export default AddImgButton;
