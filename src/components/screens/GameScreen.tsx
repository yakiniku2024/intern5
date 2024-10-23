import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GameBoard from '../game/GameBoard';
import NextPieces from '../game/NextPieces';
import ScorePanel from '../game/ScorePanel';
import HoldPiece from '../game/HoldPiece';
import { useGame } from '../../contexts/GameContext';
import { useGameControls } from '../../hooks/useGameControls';

const GameScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGame();
  useGameControls();

  useEffect(() => {
    dispatch({ type: 'START_GAME' });
    return () => dispatch({ type: 'PAUSE_GAME' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Menu
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <HoldPiece />
          <ScorePanel />
        </div>
        
        <div className="order-first md:order-none">
          <GameBoard />
        </div>
        
        <div>
          <NextPieces />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;