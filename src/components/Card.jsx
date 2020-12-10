import React from "react";
import PropTypes from "prop-types";

import backCardImage from "../style/images/back.png";
import NextButton from "./NextButton";

import "../style/components/card.scss";
import deepImage from "../style/images/spot-hero-image.svg";
import criticalImage from "../style/images/Gift_Pic_Bagel.png";
import iceImage from "../style/images/Question_Pic_Bagel.png";

const Card = (props) => {

  const {front, question, nextCard, cardImage} = props;
  console.log(cardImage)
  //render based on front or back 
  if(front === true) {
    if (cardImage === "deepImage") {
      return (
        <div className="card-container">
          <div>
            <img className="card-image" src={deepImage}/>
              <p style={{ paddingTop: "13px "}} className="card-question"> {question} </p>
          </div>
        </div> 
      );
    } else if (cardImage === "criticalImage") {
      return (
        <div className="card-container">
          <div>
            <img className="card-image" src={criticalImage}/>
              <p style={{ paddingTop: "13px "}} className="card-question"> {question} </p>
          </div>
        </div> 
      );
    } else {
      return (
        <div className="card-container">
          <div>
            <img className="card-image" src={iceImage}/>
              <p style={{ paddingTop: "13px "}} className="card-question"> {question} </p>
          </div>
        </div> 
      );
    }
  } else {
    return (
      //switch with our atlassian theme picture
      <div className="card-container">
        <img className="back-card" src={backCardImage} />
        <NextButton nextCard={nextCard} text="Flip" ></NextButton>
      </div>
    );
  };
};


Card.propTypes = {
  card: PropTypes.string,
  front: PropTypes.bool,
  question: PropTypes.string,
  nextCard: PropTypes.func
};

export default Card;