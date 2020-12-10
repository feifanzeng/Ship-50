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


const NextButton = (props) => {

  const {text} = props

  const classes = useStyles();
  return (
    <div style={{ margin: "40px auto", textAlign: "center" }}>
      <Button className={classes.root} onClick={() => props.nextCard()}> {text} </Button>
    </div>
  );
};

NextButton.propTypes = {
  shuffle: PropTypes.func,
  nextCard: PropTypes.func,
  deckArray: PropTypes.array,
  text: PropTypes.string
};

export default NextButton;
