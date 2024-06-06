import React, { useState } from 'react';
import './App.css'; // 引入全局 CSS 文件

const TicTacToe = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill('')); // 設置遊戲板狀態
  const [currentPlayer, setCurrentPlayer] = useState('X'); // 設置當前玩家狀態
  const [gameStatus, setGameStatus] = useState('下一位玩家: X'); // 設置遊戲狀態
  const [history, setHistory] = useState([Array(9).fill('')]); // 設置遊戲歷史狀態

  const handleCellClick = (index) => {
    if (gameBoard[index] !== '' || checkWinner()) return; // 如果格子不空或已有勝者，則返回

    const newBoard = [...gameBoard]; // 複製當前遊戲板
    newBoard[index] = currentPlayer; // 將當前玩家標記設置到點擊的格子
    setGameBoard(newBoard); // 更新遊戲板狀態
    setHistory([...history, newBoard]); // 更新遊戲歷史

    const winner = checkWinner(newBoard); // 檢查是否有勝者
    if (winner) {
      setGameStatus(`玩 家 ${winner} 獲勝!`); // 設置勝者訊息
    } else if (newBoard.every(cell => cell)) {
      setGameStatus('平局!'); // 如果遊戲板已滿，設置平局訊息
    } else {
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X'; // 切換玩家
      setCurrentPlayer(nextPlayer); // 更新當前玩家
      setGameStatus(`下一位玩家: ${nextPlayer}`); // 更新遊戲狀態
    }
  };

  const checkWinner = (board = gameBoard) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // 行
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // 列
      [0, 4, 8], [2, 4, 6] // 對角線
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // 返回勝者
      }
    }

    return null; // 沒有勝者
  };

  const jumpToStep = (step) => {
    setGameBoard(history[step]); // 跳轉到指定的歷史步驟
    setCurrentPlayer(step % 2 === 0 ? 'X' : 'O'); // 設置當前玩家
    setGameStatus(`下一位玩家: ${step % 2 === 0 ? 'X' : 'O'}`); // 更新遊戲狀態
  };

  return (
    <div className="game-wrapper"> {/* 遊戲包裹 */}
      <h1>Tic-Tac-Toe Game</h1> {/* 遊戲標題 */}
      <p className="game-status">{gameStatus}</p> {/* 顯示遊戲狀態 */}
      <div className="game-container"> {/* 遊戲容器 */}
        <div className="game-board"> {/* 遊戲棋盤 */}
          {gameBoard.map((cell, index) => (
            <div 
              key={index} 
              className="cell" 
              onClick={() => handleCellClick(index)} // 點擊格子事件處理
            >
              {cell} {/* 顯示格子內容 */}
            </div>
          ))}
        </div>
        <div className="game-info"> {/* 遊戲信息 */}
          <h2>遊戲歷程</h2> {/* 遊戲歷史標題 */}
          <button onClick={() => jumpToStep(0)}>遊戲開始</button> {/* 跳轉到遊戲開始 */}
          {history.map((_, step) => (
            step > 0 && (
              <button key={step} onClick={() => jumpToStep(step)}>
                回到第 {step} 步 {/* 跳轉到指定步驟 */}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe; // 導出井字遊戲組件
