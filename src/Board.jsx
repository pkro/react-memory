import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './css/Board.css';

function Board({ cards, onClick }) {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card card={card} key={card.key} onClick={onClick} />
      ))}
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.array.isRequired,
  cardsTurned: PropTypes.array.isRequired,
  cardRotations: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
