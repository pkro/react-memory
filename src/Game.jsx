import React from 'react';
import Board from './Board';
import { createRandomRotationStyles, randomRotationStyle } from './helpers';

const numCards = 36;
const strongRotationChance = 10;
const strongRotationAdd = 8;
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: true,
      cards: new Array(numCards).fill().map((val, idx) => idx),
      cardsTurned: new Array(numCards).fill(false),
      cardRotations: createRandomRotationStyles(numCards, strongRotationChance, strongRotationAdd),
    };
  }

  render() {
    const { cards, cardsTurned, cardRotations } = this.state;
    return (
      <div className="board">
        <Board cards={cards} cardsTurned={cardsTurned} cardRotations={cardRotations} />
      </div>
    );
  }
}
