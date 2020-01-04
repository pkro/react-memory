import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './css/Board.css';

function Board({ cards, cardsTurned, cardRotations, onClick }) {
  return (
    <div className="board">
      {cards.map((val, idx) => (
        <Card
          content={val}
          key={val}
          cardIdx={idx}
          style={cardRotations[idx]}
          isTurned={cardsTurned[idx]}
          onClick={onClick}
        />
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
