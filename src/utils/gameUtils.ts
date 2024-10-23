export const SHAPES = {
  I: {
    shape: [[1, 1, 1, 1]],
    color: 'cyan',
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: 'yellow',
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: 'purple',
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: 'green',
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: 'red',
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: 'blue',
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: 'orange',
  },
};

export const generateNewPiece = () => {
  const pieces = Object.keys(SHAPES);
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  
  return {
    shape: SHAPES[randomPiece].shape,
    color: SHAPES[randomPiece].color,
    x: 3,
    y: 0,
  };
};

export const canMovePiece = (piece, board) => {
  return piece.shape.every((row, dy) =>
    row.every((cell, dx) => {
      if (cell === 0) return true;
      
      const newX = piece.x + dx;
      const newY = piece.y + dy;
      
      return (
        newX >= 0 &&
        newX < board[0].length &&
        newY >= 0 &&
        newY < board.length &&
        board[newY][newX] === 0
      );
    })
  );
};