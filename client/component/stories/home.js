import React from "react";
import { Provider } from "react-redux";

import Home from "../views/Home";
import { store } from "../../store/index";
import { handleGetAllImagesRequest } from "../../store/action/imageAction";

export default { title: "Home", component: Home };

export const withoutImage = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

store.dispatch(handleGetAllImagesRequest());
export const withImage = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
