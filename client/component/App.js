import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

import Header from "./views/Header";
import Home from "./views/Home";
import Footer from "./views/Footer";
import AddImgButton from "./views/AddImgButton";

import { handleGetAllImagesRequest } from "../store/action/imageAction";

import ImageCropper from "./views/ImageCropper";

function App(props) {
  useEffect(() => {
    props.dispatch(handleGetAllImagesRequest());
  });
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit" component={ImageCropper} />
      </Switch>
      <Footer />
      <AddImgButton />
    </>
  );
}

export default connect()(App);
