import React from 'react';
import { useGame } from '../../contexts/GameContext';

const ScorePanel = () => {
  const { state } = useGame();

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm text-gray-400">Score</h3>
          <p className="text-2xl font-bold">{state.score}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-400">Level</h3>
          <p className="text-2xl font-bold">{state.level}</p>
        </div>
      </div>
    </div>
  );
};

export default ScorePanel;