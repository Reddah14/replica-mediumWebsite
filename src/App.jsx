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
    imageURL: "http://www.fillmurray.com/200/300",
  },
  {
    id: "e2",
    title: "New TV",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore pariatur...",
    author: "Bruce Willis",
    imageURL: "http://www.fillmurray.com/g/200/300",
  },
  {
    id: "e3",
    title: "Car Insurance",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore pariatur...",
    author: "Madonna Smith",
    imageURL: "https://placebear.com/200/300",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore pariatur...",
    author: "John Doe",
    imageURL: "https://www.stevensegallery.com/g/200/300",
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
        imageUrl={news[0].imageURL}
      />
      <NewsArticle
        title={news[1].title}
        description={news[1].description}
        author={news[1].author}
        imageUrl={news[1].imageURL}
      />
      <NewsArticle
        title={news[2].title}
        description={news[2].description}
        author={news[2].author}
        imageUrl={news[2].imageURL}
      />
      <NewsArticle
        title={news[3].title}
        description={news[3].description}
        author={news[3].author}
        imageUrl={news[3].imageURL}
      />
    </>
  );
}

export default App;
