import React, { useState } from 'react';
import './App.css'; // 引入全局 CSS 文件

const TicTacToe = () => {
  // 初始化遊戲板，9個格子皆為空字串
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  // 設置當前玩家狀態，初始玩家為 'X'
  const [currentPlayer, setCurrentPlayer] = useState('X');
  // 設置遊戲狀態顯示，初始為 '下一位玩家: X'
  const [gameStatus, setGameStatus] = useState('下一位玩家: X');
  // 設置歷史狀態，保存每一步的遊戲板狀態，初始為初始遊戲板
  const [history, setHistory] = useState([Array(9).fill('')]);

  // 處理格子點擊的函數
  const handleCellClick = (index) => {
    // 如果該格子已經被點擊或已有勝利者，則不做任何操作
    if (gameBoard[index] !== '' || checkWinner()) return;

    // 創建新的遊戲板
    const newBoard = [...gameBoard];
    // 在被點擊的格子填入當前玩家的符號
    newBoard[index] = currentPlayer;
    // 更新遊戲板狀態
    setGameBoard(newBoard);
    // 更新歷史狀態
    setHistory([...history, newBoard]);

    // 檢查是否有勝利者
    const winner = checkWinner(newBoard);
    if (winner) {
      // 如果有勝利者，更新遊戲狀態顯示為該玩家勝利
      setGameStatus(`玩家 ${winner} Wins!`);
    } else if (newBoard.every(cell => cell)) {
      // 如果所有格子都被填滿，更新遊戲狀態顯示為平局
      setGameStatus('Game Draw!');
    } else {
      // 如果沒有勝利者且遊戲未平局，切換到下一位玩家
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
      setGameStatus(`下一位玩家: ${nextPlayer}`);
    }
  };

  // 檢查是否有勝利者的函數
  const checkWinner = (board = gameBoard) => {
    // 定義所有可能的勝利組合
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // 水平
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // 垂直
      [0, 4, 8], [2, 4, 6]            // 對角線
    ];

    // 檢查每個勝利組合是否有相同的符號
    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // 返回勝利者的符號 ('X' 或 'O')
      }
    }

    return null; // 如果沒有勝利者，返回 null
  };

  // 跳轉到歷史中的某一步的函數
  const jumpToStep = (step) => {
    // 更新遊戲板狀態為歷史中的對應步驟
    setGameBoard(history[step]);
    // 根據步驟的奇偶性設置當前玩家
    setCurrentPlayer(step % 2 === 0 ? 'X' : 'O');
    // 更新遊戲狀態顯示
    setGameStatus(`下一位玩家: ${step % 2 === 0 ? 'X' : 'O'}`);
  };

  return (
    <div className="game-wrapper">
      <h1>Tic-Tac-Toe Game</h1>
      <p className="game-status">{gameStatus}</p> {/* 顯示遊戲狀態 */}
      <div className="game-container">
        <div className="game-board">
          {/* 遍歷遊戲板的每個格子並生成對應的格子元素 */}
          {gameBoard.map((cell, index) => (
            <div 
              key={index} 
              className="cell" 
              onClick={() => handleCellClick(index)} // 點擊格子觸發 handleCellClick 函數
            >
              {cell}
            </div>
          ))}
        </div>
        <div className="game-info">
          <h2>遊戲歷程</h2>
          {/* 添加一個按鈕，點擊可回到遊戲開始時的狀態 */}
          <button onClick={() => jumpToStep(0)}>遊戲開始</button>
          {/* 遍歷歷史狀態並生成對應的按鈕 */}
          {history.map((_, step) => (
            step > 0 && (
              <button key={step} onClick={() => jumpToStep(step)}>
                回到第 {step} 步
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe; // 導出 TicTacToe 組件
