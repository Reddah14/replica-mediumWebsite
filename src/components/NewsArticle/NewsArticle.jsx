import React from "react";

import "./NewsArticle.scss";

const NewsArticle = () => {
  return (
    <article className="row news-article">
      <div className="col-8">
        <h3 className="news-article__header">Header</h3>
        <p className="news-article__description">...description...</p>
      </div>
      <div className="col-4 news-article__image">
        <img src="" alt="" />
      </div>
    </article>
  )
};

export default NewsArticle;
