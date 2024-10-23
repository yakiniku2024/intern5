import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { useGame } from '../../contexts/GameContext';

const SettingsScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGame();

  const updateSetting = (key: string, value: any) => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: { [key]: value } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Menu
      </button>

      <div className="max-w-lg mx-auto bg-gray-800 rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Preview Pieces
            </label>
            <select
              value={state.settings.previewCount}
              onChange={(e) => updateSetting('previewCount', Number(e.target.value))}
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'piece' : 'pieces'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Game Speed
            </label>
            <select
              value={state.settings.gameSpeed}
              onChange={(e) => updateSetting('gameSpeed', e.target.value)}
              className="w-full bg-gray-700 text-white rounded-md px-3 py-2"
            >
              <option value="slow">Slow</option>
              <option value="normal">Normal</option>
              <option value="fast">Fast</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          <Save className="w-4 h-4" />
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;