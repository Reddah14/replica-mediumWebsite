import React from "react";

import "./NewsShowroom.scss";
import NewsArticle from "../NewsArticle/NewsArticle";
import MainArticle from "../MainArticle/MainArticle";

const NewsShowroom = (props) => {
  return (
    <section className="news-show-room">
      <MainArticle
        title={props.news[0].title}
        description={props.news[0].description}
        author={props.news[0].author}
        imageUrl={props.news[0].imageURL}
        date={props.news[0].date}
        readTime={props.news[0].readTime}
      />
      <h6>LATEST</h6>
      <hr />
      <NewsArticle
        title={props.news[1].title}
        description={props.news[1].description}
        author={props.news[1].author}
        imageUrl={props.news[1].imageURL}
        date={props.news[1].date}
        readTime={props.news[1].readTime}
      />
      <NewsArticle
        title={props.news[2].title}
        description={props.news[2].description}
        author={props.news[2].author}
        imageUrl={props.news[2].imageURL}
        date={props.news[2].date}
        readTime={props.news[2].readTime}
      />
      <NewsArticle
        title={props.news[3].title}
        description={props.news[3].description}
        author={props.news[3].author}
        imageUrl={props.news[3].imageURL}
        date={props.news[3].date}
        readTime={props.news[3].readTime}
      />
      <NewsArticle
        title={props.news[4].title}
        description={props.news[4].description}
        author={props.news[4].author}
        imageUrl={props.news[4].imageURL}
        date={props.news[4].date}
        readTime={props.news[4].readTime}
      />
    </section>
  );
};

export default NewsShowroom;
