import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: true,
      cards: new Array(36).fill().map((val, idx) => idx),
      cardsTurned: [],
    };
  }

  render() {
    const { cards, cardsTurned } = this.state;
    return (
      <>
        <Board cards={cards} cardsTurned={cardsTurned} />
      </>
    );
  }
}
