import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibility Image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Really boy law county she unable her sister. Feet you off its like
          like six. Among sex are leave law built now. In built table in an
          rapid blush.
        </p>
        <h4>Request for Early Access.</h4>
      </div>
    </div>
  );
};

export default Possibility;
