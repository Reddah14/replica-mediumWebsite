import React from "react";

import "./NewsArticle.scss";
import { FaBookmark } from "react-icons/fa";


const NewsArticle = (props) => {
  return (
    <article className="row news-article">
      <div className="col-8">
        <h3 className="news-article__header">{props.title}</h3>
        <p className="news-article__description">{props.description}</p>
      </div>
      <div className="col-4 news-article__image">
      </div>
      <div className="row news-footer">
          <div
            className="col-11">{props.author}
            <div> 12 Sep · 5 min read</div>          
          </div>
          <div className="col-1 bookmark-icon"><FaBookmark /></div>
      </div>
    </article>
  )
};

export default NewsArticle;
