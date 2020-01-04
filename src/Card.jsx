import React from 'react';
import PropTypes from 'prop-types';

import './css/Card.css';

function Card({ content, cardIdx, style, isTurned, onClick }) {
  return (
    <div className="cardOuterDiv">
      <div
        className={isTurned ? 'card' : 'back'}
        style={style}
        onClick={$event => onClick($event, cardIdx)}
      >
        {isTurned && content}
      </div>
    </div>

  );
}

Card.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  isTurned: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  cardIdx: PropTypes.number.isRequired,
};

export default Card;
