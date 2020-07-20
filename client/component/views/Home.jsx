import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";

const Home = (props) => {
  let [images, setImages] = useState([]);
  let isImageFetchInProgress = props.imagesInfo.isImageFetchInProgress;

  useEffect(() => {
    setImages((images = props.imagesInfo.images));
  });

  return (
    <div className="container my-5 home_container">
      <h1 className="text-center my-5">Images</h1>
      {images.length ? (
        <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 ">
          {images.map((image) => {
            return (
              <div
                key={uuid()}
                className="col my-1 rounded border single_image">
                <img src={`/uploads/${image.imageName}`} alt="image" />
              </div>
            );
          })}
        </div>
      ) : isImageFetchInProgress ? (
        "loading"
      ) : (
        "no images"
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    imagesInfo: state,
  };
}
export default connect(mapStateToProps)(Home);
