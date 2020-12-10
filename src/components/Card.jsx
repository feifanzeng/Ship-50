import React from "react";
import PropTypes from "prop-types";

import backCardImage from "../style/images/back.png";
import NextButton from "./NextButton";
import cardImage from "../style/images/spot-hero-image.svg"

import "../style/components/card.scss";

const Card = (props) => {

  const {front, question, nextCard} = props;


  //render based on front or back 
  if(front === true) {
    return (
      <div className="card-container">
        <div>
          <img className="card-image" src={cardImage}/>
            <p className="card-question"> {question} </p>
        </div>
      </div> 
    );
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