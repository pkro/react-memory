/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './css/Card.css';

function Card({ card, idx, onClick }) {
  //const style = { ...card.style, visibility: card.visible ? 'visible' : 'hidden' };
  let visStyle = { visibility: 'visible' };

  if (!card.visible) {
    visStyle = { visibility: 'hidden' };
  }
  const style = { ...card.style, ...visStyle };
  return (
    <div className="cardOuterDiv">
      <div
        className={card.isFlipped ? 'card' : 'back'}
        style={style}
        onClick={$event => onClick($event, card, idx)}
      >
        {card.isFlipped && card.visibleContent}
      </div>
    </div>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Card;
