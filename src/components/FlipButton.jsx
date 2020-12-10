import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'


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


const FlipButton = (props) => {
  return (
    <div style={{ margin: "40px auto", textAlign: "center" }}>
      <button onClick={() => props.flip()}>Flip</button>
    </div>
  );
};

FlipButton.propTypes = {
  shuffle: PropTypes.func,
  nextCard: PropTypes.func,
  flip: PropTypes.func,
  deckArray: PropTypes.array
};

export default FlipButton;
