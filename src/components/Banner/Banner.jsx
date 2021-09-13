import React from "react";
import "./Banner.scss";

const Banner = (props) => {
  return (
    <div className="row banner">
      <div className="row banner__topic-title">
        <h3 className="col-8">{props.info[0].title}</h3>
        <button type="button" className=" col-4 btn btn-success follow-btn">
          Follow
        </button>
      </div>
      <div className="col-12 banner__topic-subtitle">
        {props.info[0].subtitle}
      </div>
      <div className="row banner__topic-description">
        <p>
          {props.info[0].description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
