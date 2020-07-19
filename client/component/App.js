import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

import Header from "./views/Header";
import Home from "./views/Home";
import Footer from "./views/Footer";
import AddImgButton from "./views/AddImgButton";

import { handleGetAllImagesRequest } from "../store/action/imageAction";

function App(props) {
  useEffect(() => {
    props.dispatch(handleGetAllImagesRequest());
  });
  return (
    <>
      <Header />
      <Home />
      <AddImgButton />
      <Footer />
    </>
  );
}

export default connect()(App);
