import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import NewsShowroom from "./components/NewsShowroom/NewsShowroom";
import news from "./data/news";
import banner from "./data/banner";

function App() {
  return (
    <>
      <Nav />
      <Banner info={banner} />
      <NewsShowroom news={news} />
    </>
  );
}

export default App;
