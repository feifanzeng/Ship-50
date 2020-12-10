import React from "react";
import PropTypes from "prop-types";

import backCardImage from "../style/images/back.png";
import NextButton from "./NextButton";
import cardImage from "../style/images/spot-hero-image.svg"

//export default () => <Button>Default button</Button>;

import "../style/components/card.scss";
import FlipButton from "./FlipButton";

// const useStyles = makeStyles({
//   root :{
//     color: "#FFFFFF",
//     backgroundColor : "#5243AA",
//     position: "absolute",
//     bottom: "5px",
//     right: "10px",
//     padding: "0 5px"
//   }
// });

const Card = (props) => {

  const { card, front, color, question, nextCard, flip} = props;

  //const classes = useStyles();

  //render based on front or back 
  if(front === true) {
    return (
      <div className="card-container" style={{ color: `${color}` }}>
        <div>
          <img className="card-image" src={cardImage}/>
            <p className="card-question"> {question} </p>
        </div>
        <NextButton nextCard={nextCard} > Next</NextButton>
      </div> 
    );
  } else {
    return (
      //switch with our atlassian theme picture
      <div className="card-container">
        <img className="back-card" src={backCardImage} />
        <FlipButton flip={flip}> Flip </FlipButton>
      </div>
    );
  };
};


Card.propTypes = {
  card: PropTypes.string,
  front: PropTypes.bool,
  color: PropTypes.string,
  question: PropTypes.string,
  nextCard: PropTypes.func
};

export default Card;