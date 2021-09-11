import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="row banner">
      <div className="row banner__topic-title">
        <h3 className="col-8">Programming</h3>
        <button type="button" class=" col-4 btn btn-success follow-btn">Follow</button>
      </div>
      <div className="row banner__topic-subtitle">
        Quote about the topic OR topic sub-title
      </div>
      <div className="row banner__topic-description">
        <p>
          Follow Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis.
        </p>
      </div>
    </div>
  )
}

export default Banner;