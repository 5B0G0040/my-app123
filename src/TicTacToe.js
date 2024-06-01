import React, { useState } from 'react';
import './App.css'; // 引入全局 CSS 文件

const TicTacToe = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState('Next Player: X');

  const handleCellClick = (index) => {
    if (gameBoard[index] !== '' || checkWinner()) return;
    
    const newBoard = [...gameBoard];
    newBoard[index] = currentPlayer;
    setGameBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setGameStatus(`Player ${winner} Wins!`);
    } else if (newBoard.every(cell => cell)) {
      setGameStatus('Game Draw!');
    } else {
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
      setGameStatus(`Next Player: ${nextPlayer}`);
    }
  };

  const checkWinner = (board = gameBoard) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const resetGame = () => {
    setGameBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setGameStatus('Next Player: X');
  };

  return (
    <div className="game-container">
      <h1>Tic-Tac-Toe Game</h1>
      <div className="game-board">
        {gameBoard.map((cell, index) => (
          <div 
            key={index} 
            className="cell" 
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="game-info">
        <p>{gameStatus}</p>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
