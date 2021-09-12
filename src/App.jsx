import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import MainArticle from "./components/MainArticle/MainArticle";

const news = [
  {
    id: "e0",
    title: "Map, Filter, and Reduce in Swift",
    description:
      "How to use your curiosity and Chrome DevTools to learn more about web...",
    author: "Margarita Fox",
    imageURL: "https://www.stevensegallery.com/140/200",
    readTime: 8,
    date: "Set 8",
  },
  {
    id: "e1",
    title: "Write your tools: simple JIRA automation",
    description:
      "Cloud-based solutions are the new future for programmers and the data scientists...",
    author: "Billie Jean",
    imageURL: "http://www.fillmurray.com/200/300",
    readTime: 4,
    date: "Set 10",
  },
  {
    id: "e2",
    title: "Kickstart with Micronaut Framework",
    description: "Fun Python programs explained with code...",
    author: "Bruce Willis",
    imageURL: "http://www.fillmurray.com/g/200/300",
    readTime: 5,
    date: "Set 11",
  },
  {
    id: "e3",
    title: "6 Must-try Python Programse",
    description:
      "It’s important not to put all your eggs into one basket. That’s why despite your main job it’s crucial you have a side gig. In this...",
    author: "Madonna Smith",
    imageURL: "https://placebear.com/200/300",
    readTime: 3,
    date: "Set 11",
  },
  {
    id: "e4",
    title: "How to execute an object file: Part 3",
    description:
      "It’s been more than 11 years in my career in the IT industry. I have worked in different teams of different sizes and of different...",
    author: "John Doe",
    imageURL: "https://www.stevensegallery.com/g/200/300",
    readTime: 7,
    date: "Set 12",
  },
];

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <MainArticle
        title={news[0].title}
        description={news[0].description}
        author={news[0].author}
        imageUrl={news[0].imageURL}
        date={news[0].date}
        readTime={news[0].readTime}

      />
      <h6>LATEST</h6>
      <hr />
      <NewsArticle
        title={news[1].title}
        description={news[1].description}
        author={news[1].author}
        imageUrl={news[1].imageURL}
        date={news[1].date}
        readTime={news[1].readTime}

      />
      <NewsArticle
        title={news[2].title}
        description={news[2].description}
        author={news[2].author}
        imageUrl={news[2].imageURL}
        date={news[2].date}
        readTime={news[2].readTime}

      />
      <NewsArticle
        title={news[3].title}
        description={news[3].description}
        author={news[3].author}
        imageUrl={news[3].imageURL}
        date={news[3].date}
        readTime={news[3].readTime}

      />
      <NewsArticle
        title={news[4].title}
        description={news[4].description}
        author={news[4].author}
        imageUrl={news[4].imageURL}
        date={news[4].date}
        readTime={news[4].readTime}

      />
    </>
  );
}

export default App;
