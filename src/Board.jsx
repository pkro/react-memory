import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './css/Board.scss';

function Board({ cards, onClick }) {
  return (
    <div className="board">
      {cards.map((card, idx) => (
        <Card card={card} key={card.key} idx={idx} onClick={onClick} />
      ))}
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
