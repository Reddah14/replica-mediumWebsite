import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.scss";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import NewsArticle from "./components/NewsArticle/NewsArticle";

function App() {
  /* const news = [
    {
      id: "n1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "n2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "n3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "n4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; */

  return (
    <>
      <Nav />
      <Banner />
      <NewsArticle />
      <NewsArticle />
      <NewsArticle />
      <NewsArticle />
      <NewsArticle /> 
    </>
  );
}

export default App;
