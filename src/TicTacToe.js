import React, { useState } from 'react';
import './App.css'; // 引入全局 CSS 檔案

const TicTacToe = () => {
  // 建立遊戲棋盤的狀態，初始為9個空字串的陣列
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  // 設定當前玩家的狀態，初始為 'X'
  const [currentPlayer, setCurrentPlayer] = useState('X');
  // 設定遊戲狀態的訊息，初始為 '下一位玩家: X'
  const [gameStatus, setGameStatus] = useState('下一位玩家: X');
  // 儲存遊戲歷史的陣列，初始為包含一個空棋盤的陣列
  const [history, setHistory] = useState([Array(9).fill('')]);

  // 處理玩家點擊方格的事件
  const handleCellClick = (index) => {
    // 如果方格已被點擊或已有獲勝者，則不做任何操作
    if (gameBoard[index] !== '' || checkWinner()) return;

    // 複製當前棋盤狀態並更新被點擊的方格
    const newBoard = [...gameBoard];
    newBoard[index] = currentPlayer;
    setGameBoard(newBoard);
    setHistory([...history, newBoard]);

    // 檢查是否有玩家獲勝
    const winner = checkWinner(newBoard);
    if (winner) {
      // 若有玩家獲勝，更新遊戲狀態訊息
      setGameStatus(`玩家 ${winner} Wins!`);
    } else if (newBoard.every(cell => cell)) {
      // 若棋盤已滿且無獲勝者，表示遊戲平局
      setGameStatus('遊戲平局!');
    } else {
      // 若無人獲勝且棋盤未滿，切換到下一位玩家
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
      setGameStatus(`下一位玩家: ${nextPlayer}`);
    }
  };

  // 檢查是否有玩家獲勝
  const checkWinner = (board = gameBoard) => {
    // 定義所有可能的獲勝組合
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    // 檢查每個獲勝組合是否滿足獲勝條件
    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // 返回獲勝者 'X' 或 'O'
      }
    }

    return null; // 若無人獲勝，返回 null
  };

  // 跳轉到遊戲歷程中的特定步驟
  const jumpToStep = (step) => {
    // 設定棋盤為歷史中的特定步驟
    setGameBoard(history[step]);
    // 設定當前玩家為特定步驟應該輪到的玩家
    setCurrentPlayer(step % 2 === 0 ? 'X' : 'O');
    // 更新遊戲狀態訊息
    setGameStatus(`下一位玩家: ${step % 2 === 0 ? 'X' : 'O'}`);
  };

  return (
    // 包含整個遊戲的包裝 div
    <div className="game-wrapper">
      {/* 顯示遊戲的標題 */}
      <h1>井字遊戲</h1>
      {/* 顯示遊戲狀態的訊息 */}
      <p className="game-status">{gameStatus}</p> {/* 狀態顯示 */}
      
      {/* 包含遊戲棋盤和遊戲資訊的容器 */}
      <div className="game-container">
        
        {/* 包含遊戲棋盤的容器 */}
        <div className="game-board">
          {/* 使用 map 函式來迭代棋盤的每一個格子 */}
          {gameBoard.map((cell, index) => (
            // 每一個格子的 div，當被點擊時會觸發 handleCellClick 函式
            <div 
              key={index} // 每個格子需要一個唯一的 key 屬性
              className="cell" // 為格子指定 CSS 類別
              onClick={() => handleCellClick(index)} // 當格子被點擊時觸發的事件
            >
              {cell} {/* 顯示每個方格的值 'X', 'O' 或空 */}
            </div>
          ))}
        </div>
        
        {/* 包含遊戲資訊的容器 */}
        <div className="game-info">
          {/* 顯示遊戲歷程的標題 */}
          <h2>遊戲歷程</h2>
          {/* 提供一個按鈕，點擊後回到遊戲開始狀態 */}
          <button onClick={() => jumpToStep(0)}>遊戲開始</button> {/* 回到遊戲開始 */}
          
          {/* 使用 map 函式來迭代歷史中的每一步 */}
          {history.map((_, step) => (
            // 只有當 step 大於 0 時才顯示按鈕
            step > 0 && (
              // 每個步驟的按鈕，點擊後會跳轉到特定的步驟
              <button key={step} onClick={() => jumpToStep(step)}>
                回到第 {step} 步
              </button> // 跳轉到特定步驟
            )
          ))}
        </div>
      </div>
    </div>
  );
  };
  
  export default TicTacToe;
  