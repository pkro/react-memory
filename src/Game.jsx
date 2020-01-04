import React from 'react';
import update from 'immutability-helper';
import Board from './Board';
import { createRandomRotationStyles, randomRotationStyle, randomContent } from './helpers';
import content from './data/cardContent.json';

const numCards = 24;
const strongRotationChance = 10;
const strongRotationAdd = 8;
const cardContent = content.emoticons;

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: true,
      cards: randomContent(cardContent, numCards),
      cardsTurned: new Array(numCards).fill(false),
      cardRotations: createRandomRotationStyles(numCards, strongRotationChance, strongRotationAdd),
    };
  }

  onCardClick = (event, card) => {
    const cardsTurned = [...this.state.cardsTurned];
    cardsTurned[card] = !cardsTurned[card];

    this.setState({ cardsTurned });
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
