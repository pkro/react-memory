import React from 'react';
import PropTypes from 'prop-types';

import './css/Card.css';

function Card({ content, style }) {
  return (
    <div className="cardOuterDiv">
      <div className="card" style={style}>
        Card {content}
      </div>
    </div>

  );
}

Card.propTypes = {
  content: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default Card;
