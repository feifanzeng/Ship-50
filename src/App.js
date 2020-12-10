import React, { Component } from "react";

import Card from "./components/Card" ;
import { DeeperQArray } from "./utils/DeeperQArray.js";
import { IcebreakQArray } from "./utils/IcebreakQArray.js";
import { CriticalQArray } from "./utils/CriticalQArray.js";
import {Helmet} from 'react-helmet';
import "./style/components/card.scss";
import NextButton from "./components/NextButton";
import Catagory from "./components/catagory";


// TODO: Figure out how to flip cards onto its back side after it has been viewed (should only display current card + question to user)
//       Move Flip button out of Card component so it sits below the decks of cards? <-- follow up with designers 
//       Choose name for the App, and adjust padding accordingly when switching from "Change anywhere"
//       Change Favicon to Atlassian theme
//       Choose better background? Or insert some kind of picture 

class App extends Component {

  constructor() {
    super();
    this.state = {
      DeeperQArray: DeeperQArray,
      IcebreakQArray: IcebreakQArray,
      CriticalQArray: CriticalQArray,
      cardPicked: [],
      front: true,
    };
  };

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };
    //this.setState({ cardsArray: array, cardPicked: [] })
    return array;
  };

  nextCard = (array, category) => {
    if (array.length != 0) {
      let cardsArray = array;
//       const randomItem = cardsArray[Math.floor(Math.random() * cardsArray.length)];
// to
      const randomItem = cardsArray[0];
      // const randomItem = cardsArray[Math.floor(Math.random() * cardsArray.length)];
      const newCardsArray = cardsArray.filter(element => element.index !== randomItem.index)
      if (category == 0) {
        this.setState({ IcebreakQArray: newCardsArray });
      } else if (category == 1) {
        this.setState({ CriticalQArray: newCardsArray });
      } else {
        this.setState({ DeeperQArray: newCardsArray });
      }
      let cardsPickedArray = this.state.cardPicked;
      cardsPickedArray.length < 52 &&
        cardsPickedArray.push(randomItem);
      this.setState({ cardPicked: cardsPickedArray })
    }
  };


  flip = () => {
    this.setState({ front: !this.state.front })
  };


  render() {
    const cardsPickedArray = this.state.cardPicked;
    const DeeperQArray = this.shuffle(this.state.DeeperQArray);
    const IcebreakQArray = this.shuffle(this.state.IcebreakQArray);
    const CriticalQArray = this.shuffle(this.state.CriticalQArray);

    return (
      <>
        <div>
          <Helmet>
            <style>{'body { background-color: #BAC5E7; }'}</style>
          </Helmet>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "left", marginTop: "50px", fontSize: "50px", height: "100px" }}>
            <img style={{ height: "50px", width: "50px", paddingRight: "20px", paddingLeft: "40px"}} src={require('./style/images/atlaslogo.png')} />
            <p>Bagel</p>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
              <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 275px", height: 282, }}>
                {IcebreakQArray && IcebreakQArray.map((card, index) => {
                  return (
                    <div className="animated slideInDown" key={index}>
                      <Card front={!this.state.front} question={card.question} nextCard={() => this.nextCard(this.state.IcebreakQArray, 0)} flip={this.flip}/>
                    </div>
                  );
                })}
              </div>
              <Catagory label={"Icebreakers"}/>
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
              <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 275px", height: 282 }}>
                {CriticalQArray && CriticalQArray.map((card, index) => {
                  return (
                    <div className="animated slideInDown" key={index}>
                      <Card front={!this.state.front} question={card.question} nextCard={() => this.nextCard(this.state.CriticalQArray, 1)}flip={this.flip}/>
                    </div>
                  );
                })}
              </div>
              <Catagory label={"Critical Thinking"}/>
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
              <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 275px", height: 282 }}>
                {DeeperQArray && DeeperQArray.map((card, index) => {
                  return (
                    <div className="animated slideInDown" key={index}>
                      <Card front={!this.state.front} question={card.question} nextCard={() => this.nextCard(this.state.DeeperQArray, 2)} flip={this.flip}/>
                    </div>
                  );
                })}
              </div>
              <Catagory label={"Deep"}/>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px", paddingTop: "75px"}}>
          {cardsPickedArray && cardsPickedArray.map((card, index) => {
            return (
              <div className="animated slideInUp" key={index}>
                <Card front={true} question={card.question} nextCard={this.nextCard} flip={this.flip}/>
              </div>
            );
          })}
        </div>
      </>
    );
  };
};


export default App;
