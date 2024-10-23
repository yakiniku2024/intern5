import { generateNewPiece, canMovePiece } from '../utils/gameUtils';

export const initialState = {
  board: Array(20).fill(null).map(() => Array(10).fill(0)),
  currentPiece: null,
  nextPieces: [],
  holdPiece: null,
  canHold: true,
  score: 0,
  level: 1,
  gameOver: false,
  isPaused: false,
  settings: {
    previewCount: 3,
    gameSpeed: 'normal',
    controls: {
      moveLeft: 'ArrowLeft',
      moveRight: 'ArrowRight',
      softDrop: 'ArrowDown',
      hardDrop: 'ArrowUp',
      rotateLeft: 'z',
      rotateRight: 'x',
      hold: ' ',
    },
  },
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        settings: state.settings,
        currentPiece: generateNewPiece(),
        nextPieces: Array(state.settings.previewCount)
          .fill(null)
          .map(() => generateNewPiece()),
      };

    case 'MOVE_PIECE':
      const newPosition = {
        ...state.currentPiece,
        x: state.currentPiece.x + action.payload.x,
        y: state.currentPiece.y + action.payload.y,
      };
      
      return canMovePiece(newPosition, state.board)
        ? { ...state, currentPiece: newPosition }
        : state;

    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload,
        },
      };

    // Additional cases will be added for rotation, line clearing, etc.
    
    default:
      return state;
  }
};