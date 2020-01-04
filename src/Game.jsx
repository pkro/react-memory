import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: true,
      cards: [],
      cardsTurned: [],
    };
  }

  render() {
    return <>Game</>;
  }
}
