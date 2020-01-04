import React from 'react';
import PropTypes from 'prop-types';

import './css/Card.css';

function Card({ content, style }) {
  return (
    <div className="cardOuterDiv">
      <div className="card" style={style}>
        {content}
      </div>
    </div>

  );
}

Card.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Card;
