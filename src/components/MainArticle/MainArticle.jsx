import React from "react";

import "./MainArticle.scss";
import { FaUserCircle } from "react-icons/fa";

const MainArticle = (props) => {
  return (
    <article className="row main-article">
      <img
        src={props.imageUrl}
        className="col-12 main-article__image"
        alt="murray"
      />
      <div className="col-12">
        <h3 className="main-article__header">{props.title}</h3>
        <p className="col-12 main-article__description">{props.description}</p>
      </div>
      <div className="row main-footer">
        <div className="col-2 main-footer__profile">
          <FaUserCircle />
        </div>
        <div className="col-8 main-footer__info">
          <div className="row main-footer__info--author">{props.author}</div>
          <div className="row main-footer__info--time">
            {props.date} · {props.readTime} min read
          </div>
        </div>
      </div>
    </article>
  );
};

export default MainArticle;
