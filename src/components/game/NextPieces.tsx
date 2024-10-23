import React from 'react';
import { useGame } from '../../contexts/GameContext';

const NextPieces = () => {
  const { state } = useGame();

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Next Pieces</h3>
      <div className="space-y-4">
        {state.nextPieces.map((piece, index) => (
          <div key={index} className="bg-gray-700 p-2 rounded">
            {/* Preview implementation will be added */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextPieces;