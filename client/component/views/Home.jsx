import React from "react";
import { v4 as uuid } from "uuid";

const Home = (props) => {
  return (
    <div className="container my-5">
      <h1 className="text-center my-2">Images</h1>

      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => {
          return (
            <div
              key={uuid()}
              style={{
                border: "1px solid green",
                width: "50px",
                height: "50px",
              }}
              className="col my-1"></div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
