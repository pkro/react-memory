import React from 'react';
import update from 'immutability-helper';
import Board from './Board';
import { createDeck, randomRotationStyle } from './helpers';
import content from './data/cardContent.json';

const numCards = 16;
const strongRotationChance = 10;
const strongRotationAdd = 8;
const cardContent = content.emoticons;
const secondsToViewTurnedCard = 2;

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: createDeck(cardContent, numCards, strongRotationChance, strongRotationAdd),
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
    const { cards } = this.state;
    // otherwise react seems to update immediately without calling setstate when changing a card property
    // on the card array itself
    // I guess this is what immutability-helper is supposed to solve, but i don't understand how
    const myCards = JSON.parse(JSON.stringify(cards));
    const openCards = cards.filter(card => card.isFlipped);
    let action = 'flip';

    if (openCards.length > 1) {
      if (openCards[0].visibleContent === openCards[1].visibleContent) {
        action = 'remove';
      }

      const openCardKeys = [openCards[0].key, openCards[1].key];
      for (let i = 0; i < cards.length; i++) {
        if (openCardKeys.includes(cards[i].key)) {
          myCards[i].isFlipped = false;
          if (action === 'remove') {
            myCards[i].visible = false;
          } else {
            myCards[i].style = randomRotationStyle(strongRotationChance, strongRotationAdd);
          }
        }
      }

      setTimeout(
        () => this.setState(state => update(state, { cards: { $set: myCards } })),
        secondsToViewTurnedCard * 1000
      );

      if (myCards.filter(card => card.visible).length === 0) {
        for (let i = 0; i < cards.length; i++) {
          myCards[i].isFlipped = true;
          myCards[i].visible = true;
        }
        this.setState(state => update(state, { cards: { $set: myCards } }));
        alert("You won!");
      }
    }
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
