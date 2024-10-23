import { useEffect } from 'react';
import { useGame } from '../contexts/GameContext';

export const useGameControls = () => {
  const { state, dispatch } = useGame();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { controls } = state.settings;
      
      if (state.gameOver || state.isPaused) return;

      switch (event.key) {
        case controls.moveLeft:
          dispatch({ type: 'MOVE_PIECE', payload: { x: -1, y: 0 } });
          break;
        case controls.moveRight:
          dispatch({ type: 'MOVE_PIECE', payload: { x: 1, y: 0 } });
          break;
        case controls.softDrop:
          dispatch({ type: 'MOVE_PIECE', payload: { x: 0, y: 1 } });
          break;
        // Additional controls will be added
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.settings, state.gameOver, state.isPaused]);
};