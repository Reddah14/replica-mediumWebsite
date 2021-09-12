import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import NewsArticle from "./components/NewsArticle/NewsArticle";


const news = [
  {
    id: "e1",
    title: "Toilet Paper Rises price !",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore pariatur...",
    author: "Billie Jean",
    image: "",
  },
  {
    id: "e2",
    title: "New TV",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore pariatur...",
    author: "Bruce Willis",
    image: "",
  },
  {
    id: "e3",
    title: "Car Insurance",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore pariatur...",
    author: "Madonna Smith",
    image: "",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore pariatur...",
    author: "John Doe",
    image: "",
  },
];

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <NewsArticle
        title={news[0].title}
        description={news[0].description}
        author={news[0].author}
      />
      <NewsArticle
        title={news[1].title}
        description={news[1].description}
        author={news[1].author}
      />
      <NewsArticle
        title={news[2].title}
        description={news[2].description}
        author={news[2].author}
      />
      <NewsArticle
        title={news[3].title}
        description={news[3].description}
        author={news[3].author}
      />            
    </>
  );
}

export default App;
