/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

import './css/Card.css';

function Card({ card, onClick }) {
  return (
    <div className="cardOuterDiv">
      <div
        className={card.isFlipped ? 'card' : 'back'}
        style={card.style}
        onClick={$event => onClick($event, card, card.key)}
      >
        {card.isFlipped && card.visibleContent}
      </div>
    </div>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  card: PropTypes.objectOf(CardItem).isRequired,
};

export default Card;
