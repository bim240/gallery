import React from "react";
import { Provider } from "react-redux";
import Home from "../views/Home";

import { store } from "../../store/index";

export default { title: "Home", component: Home };

export const withoutImage = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
let initialState = {
  isImageFetchInProgress: false,
  addImageInProgress: false,
  images: ["https://image.flaticon.com/icons/svg/740/740935.svg"],
  error: "",
};
export const withImage = () => (
  <Provider store={store}>
    <Home state={initialState} />
  </Provider>
);
