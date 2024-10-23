import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TitleScreen from './components/screens/TitleScreen';
import GameScreen from './components/screens/GameScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import { GameProvider } from './contexts/GameContext';

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
        </Routes>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;