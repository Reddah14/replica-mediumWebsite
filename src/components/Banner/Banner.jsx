import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="row banner">
      <div className="row banner__topic-title">
        <h3 className="col-8">Programming</h3>
        <button type="button" className=" col-4 btn btn-success follow-btn">
          Follow
        </button>
      </div>
      <div className="col-12 banner__topic-subtitle">
        The good, the bad, the buggy.
      </div>
      <div className="row banner__topic-description">
        <p>
          Follow Programming topic because Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Accusamus nobis.
        </p>
      </div>
    </div>
  );
};

export default Banner;
