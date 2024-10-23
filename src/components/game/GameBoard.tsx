import React from 'react';
import { useGame } from '../../contexts/GameContext';

const GameBoard = () => {
  const { state } = useGame();
  const { board, currentPiece } = state;

  const renderBoard = () => {
    const displayBoard = board.map(row => [...row]);
    
    if (currentPiece) {
      currentPiece.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            const boardY = currentPiece.y + y;
            const boardX = currentPiece.x + x;
            if (boardY >= 0 && boardY < board.length) {
              displayBoard[boardY][boardX] = 2;
            }
          }
        });
      });
    }

    return displayBoard;
  };

  return (
    <div className="bg-gray-800 p-2 rounded-lg">
      <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(10, minmax(0, 1fr))' }}>
        {renderBoard().map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${y}-${x}`}
              className={`aspect-square rounded-sm ${
                cell === 0
                  ? 'bg-gray-700'
                  : cell === 2
                  ? 'bg-blue-500'
                  : 'bg-gray-500'
              }`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameBoard;