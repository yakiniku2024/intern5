import React from 'react';
import { useGame } from '../../contexts/GameContext';

const HoldPiece = () => {
  const { state } = useGame();

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Hold</h3>
      <div className="bg-gray-700 p-2 rounded aspect-square">
        {/* Hold piece implementation will be added */}
      </div>
    </div>
  );
};

export default HoldPiece;