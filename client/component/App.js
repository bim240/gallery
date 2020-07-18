import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./views/Header";
import Home from "./views/Home";
import Footer from "./views/footer";
import AddImgButton from "./views/AddImgButton";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AddImgButton />
      <Footer />
    </>
  );
}

export default App;
