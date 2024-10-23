import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { gameReducer, initialState } from '../reducers/gameReducer';
import { loadSettings, saveSettings } from '../utils/storage';

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  // Load saved settings from localStorage and merge with initial state
  const savedSettings = loadSettings();
  const initialStateWithSettings = {
    ...initialState,
    settings: savedSettings || initialState.settings,
  };

  const [state, dispatch] = useReducer(gameReducer, initialStateWithSettings);

  // Save settings whenever they change
  useEffect(() => {
    saveSettings(state.settings);
  }, [state.settings]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};