import React from 'react';
import Card from './Card';
import './Board.css';

function Board({ cards, cardsTurned }) {
  return (
    <div className="board">
      {cards.map((val, idx) => (
        <Card content={val} key={val} />
      ))}
    </div>
  );
}

export default Board;