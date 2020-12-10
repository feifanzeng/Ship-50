import React, { Component } from "react";

import Card from "./components/Card" ;
import ActionsButtons from "./components/ActionsButtons" ;
import { deckArray } from "./utils/DeckArray";
import { DeeperQArray } from "./utils/DeeperQArray.js";
import { IcebreakQArray } from "./utils/IcebreakQArray.js";
import { CriticalQArray } from "./utils/CriticalQArray.js";
class App extends Component {

  constructor() {
    super(); 
    this.state = {
      DeeperQArray: DeeperQArray,
      IcebreakQArray: IcebreakQArray,
      CriticalQArray: CriticalQArray,
      cardPicked: [],
      front: true
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
    this.setState({ cardsArray: array, cardPicked: [] })
    return array;
  };

  dealOneCard = () => {
    let cardsArray = this.state.cardsArray;
    const randomItem = cardsArray[Math.floor(Math.random()*cardsArray.length)];
    const newCardsArray = cardsArray.filter(element => element.index !== randomItem.index)
    this.setState({ cardsArray: newCardsArray })
    let cardsPickedArray = this.state.cardPicked;
    cardsPickedArray.length < 52 &&
    cardsPickedArray.push(randomItem);
    this.setState({ cardPicked: cardsPickedArray })
  };

  flip = () => {
    this.setState({ front: !this.state.front})
  };

  render() {
    // const cardsArray = this.state.cardsArray;
    // const cardsPickedArray = this.state.cardPicked;
    const DeeperQArray = this.state.DeeperQArray;
    const IcebreakQArray = this.state.IcebreakQArray;
    const CriticalQArray = this.state.CriticalQArray;

    return (
      <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px", fontSize: "100px" }}>
          <h1>Connect Anywhere</h1>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <div  style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px", height: 282,  }}>
            {IcebreakQArray && IcebreakQArray.map((card, index) => {
              return (
                <div className="animated slideInDown" key={index}>
                  <Card front={this.state.front} question={card.question}/>
                </div>
              ); 
            })}
          </div>
          {/*<ActionsButtons shuffle={this.shuffle} dealOneCard={this.dealOneCard} flip={this.flip} deckArray={deckArray} />*/}
          {/* <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px" }}>
            {cardsPickedArray && cardsPickedArray.map((card, index) => {
              return (
                <div className="animated slideInUp" key={index}>
                  <Card suits={card.suits} card={card.card} color={card.color} front={true}/>
                </div>
              ); 
            })}
          </div> */}
          <div  style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px", height: 282 }}>
            {CriticalQArray && CriticalQArray.map((card, index) => {
              return (
                <div className="animated slideInDown" key={index}>
                  <Card suits={card.suits} card={card.card} color={card.color} front={this.state.front} question={"what is ur fav food?"}/>
                </div>
              ); 
            })}
          </div>
          {/* <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px" }}>
            {cardsPickedArray && cardsPickedArray.map((card, index) => {
              return (
                <div className="animated slideInUp" key={index}>
                  <Card suits={card.suits} card={card.card} color={card.color} front={true}/>
                </div>
              ); 
            })}
          </div> */}
          <div  style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px", height: 282 }}>
            {DeeperQArray && DeeperQArray.map((card, index) => {
              return (
                <div className="animated slideInDown" key={index}>
                  <Card suits={card.suits} card={card.card} color={card.color} front={this.state.front} question={"what is ur fav food?"}/>
                </div>
              ); 
            })}
          </div>
          {/* <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px" }}>
            {cardsPickedArray && cardsPickedArray.map((card, index) => {
              return (
                <div className="animated slideInUp" key={index}>
                  <Card suits={card.suits} card={card.card} color={card.color} front={true}/>
                </div>
              ); 
            })}
          </div> */}
        </div>
      </>
    );
  };
};


export default App;
