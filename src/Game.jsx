import React from 'react';
import update from 'immutability-helper';
import Board from './Board';
import { createRandomRotationStyles, randomRotationStyle, randomContent } from './helpers';
import content from './data/cardContent.json';

const numCards = 24;
const strongRotationChance = 10;
const strongRotationAdd = 8;
const cardContent = content.emoticons;
const secondsToViewTurnedCard = 2;

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: randomContent(cardContent, numCards),
      cardsTurned: new Array(numCards).fill(false),
      cardRotations: createRandomRotationStyles(numCards, strongRotationChance, strongRotationAdd),
    };
  }

  onCardClick = (event, card) => {
    event.preventDefault();
    const { cardsTurned, cardRotations, cards } = this.state;
    let otherCardIsTurned = false;

    if (!cardsTurned[card]) {
      cardsTurned[card] = true;
      cardRotations[card] = randomRotationStyle(strongRotationChance, strongRotationAdd);
      this.setState({ cardsTurned, cardRotations });
    }
    /*
      for (let i = 0; i < cards.length; i++) {
        if (cardsTurned[i]) {
          otherCardIsTurned = true;
          break;
        }
      }
  
      if (!otherCardIsTurned) {
        setTimeout(() => {
          cardsTurned[card] = false;
          this.setState({ cardsTurned });
        }, secondsToViewTurnedCard * 1000);
      }
    */
  }

  render() {
    const { cards, cardsTurned, cardRotations } = this.state;
    return (
      <div className="board">
        <Board
          cards={cards}
          cardsTurned={cardsTurned}
          cardRotations={cardRotations}
          onClick={this.onCardClick}
        />
      </div>
    );
  }
}
