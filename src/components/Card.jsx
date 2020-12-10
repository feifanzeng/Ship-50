import React from "react";
import PropTypes from "prop-types";

import backCardImage from "../style/images/back.png";
import heart from "../style/images/heart.png";
import diamond from "../style/images/diamond.png";
import club from "../style/images/club.png";
import spade from "../style/images/spade.png";
import ActionsButtons from "./ActionsButtons";
import cardImage from "../style/images/spot-hero-image.svg"
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";

//export default () => <Button>Default button</Button>;

import "../style/components/card.scss";

const useStyles = makeStyles({
  root :{
    color: "#FFFFFF",
    backgroundColor : "#5243AA",
    position: "absolute",
    bottom: "5px",
    right: "10px",
    padding: "0 5px"
  }
});

const Card = (props) => {

  const { card, front, color, question } = props;

  const classes = useStyles();
//   const questionStyle = {
//     fontSize: 14,
//     color: "#4a54f1",
//     textAlign: "center",
//     paddingTop: "100px",
//     position: "absolute",
//     bottom: 40,
//     left: 0
// }

//   const questionImageStyle = {
//     // height: 40, 
//     position: "absolute", 
//     width: "100%",
//     height: "100%"
//     // top: "50%", 
//     // left: "50%", 
//     // transform: "translate(-50%, -50%)" 
//   }

  //render based on front or back 
  if(front === true) {
    return (
<<<<<<< HEAD
      <div className="card-container">
        {/* <div  style={{ position: "absolute", top: 5, left: 5 }}>
          <div style={{ maxWidth: 20 }}>{card}</div>
          <img src={cardSymbol} alt="suit-symbol" style={{ maxWidth: 20 }}/>
        </div> */}
        {/* <div>
          <img src={cardSymbol} alt="suit-symbol" style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
        </div> */}
        <p>{question}</p>
        
        
        {/* <div style={{ position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)" }}>
          <div style={{ maxWidth: 20 }}>{card}</div>
          <img src={cardSymbol} alt="suit-symbol" style={{ maxWidth: 20 }}/>        
        </div> */}

=======
      <div className="card-container" style={{ color: `${color}` }}>
        <div>
          <img className="card-image" src={cardImage}/>
            <p className="card-question"> {question} </p>
        </div>
        <Button className={classes.root}> Next</Button>
>>>>>>> Atlassian styling on card component
      </div> 
    );
  } else {
    return (
      //switch with our atlassian theme picture
      <div className="card-container">
        <img className="back-card" src={backCardImage} />
      </div>
    );
  };
};


Card.propTypes = {
  card: PropTypes.string,
  front: PropTypes.bool,
  color: PropTypes.string,
  question: PropTypes.string
};

export default Card;