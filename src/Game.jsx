import React from 'react';
import update from 'immutability-helper';
import CardItem from './CardItem'
import Board from './Board';
import { createDeck, randomRotationStyle } from './helpers';
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
      cards: createDeck(cardContent, numCards, strongRotationChance, strongRotationAdd),
      lastCardTurned: new CardItem(0, '0', '0', false),
    };
  }

  onCardClick = (event, card, cardIdx) => {
    event.preventDefault();
    const { cards } = this.state;
    if (!card.isFlipped) {
      cards[cardIdx].isFlipped = true;
      cards[cardIdx].style = randomRotationStyle(strongRotationChance, strongRotationAdd);
      this.setState(state => update(state, { cards: { $set: cards } }));
      this.gameLogic();
    }
  }

  gameLogic = () => {
    console.log('running game logic');
    const { cards } = this.state;
    const openCards = cards.filter(card => card.isFlipped);
    // toDo: set openCards with same values to invisile
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="board">
        <Board cards={cards} onClick={this.onCardClick} />
      </div>
    );
  }
}
