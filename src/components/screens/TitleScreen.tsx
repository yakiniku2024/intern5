import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Settings } from 'lucide-react';

const TitleScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-white mb-8">Tetris</h1>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/game')}
            className="w-48 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            <Play className="w-5 h-5" />
            Play Game
          </button>
          
          <button
            onClick={() => navigate('/settings')}
            className="w-48 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default TitleScreen;