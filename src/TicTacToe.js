import React, { useState } from 'react'; // 引入 React 並使用 useState Hook
import './App.css'; // 引入全局 CSS 文件

const TicTacToe = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill('')); // 定義並初始化遊戲板狀態為一個包含 9 個空字符串的數組
  const [currentPlayer, setCurrentPlayer] = useState('X'); // 定義並初始化當前玩家狀態為 'X'
  const [gameStatus, setGameStatus] = useState('下一位玩家: X'); // 定義並初始化遊戲狀態信息

  const handleCellClick = (index) => { // 定義處理單元格點擊的函數
    if (gameBoard[index] !== '' || checkWinner()) return; // 如果單元格已被佔用或已有贏家，則返回

    const newBoard = [...gameBoard]; // 創建新的遊戲板狀態副本
    newBoard[index] = currentPlayer; // 將當前玩家標記放在點擊的單元格上
    setGameBoard(newBoard); // 更新遊戲板狀態

    const winner = checkWinner(newBoard); // 檢查是否有贏家
    if (winner) { // 如果有贏家
      setGameStatus(`玩 家 ${winner} Wins!`); // 更新遊戲狀態信息為贏家信息
    } else if (newBoard.every(cell => cell)) { // 如果遊戲板已滿且無贏家
      setGameStatus('Game Draw!'); // 更新遊戲狀態信息為平局
    } else { // 如果遊戲未結束
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X'; // 切換到下一位玩家
      setCurrentPlayer(nextPlayer); // 更新當前玩家狀態
      setGameStatus(`下一位玩家: ${nextPlayer}`); // 更新遊戲狀態信息為下一位玩家
    }
  };

  const checkWinner = (board = gameBoard) => { // 定義檢查贏家的函數
    const winningCombinations = [ // 定義所有可能的勝利組合
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of winningCombinations) { // 瀏覽所有勝利組合
      if (board[a] && board[a] === board[b] && board[a] === board[c]) { // 如果某一組合的三個單元格相等且不為空
        return board[a]; // 返回贏家標記
      }
    }

    return null; // 如果無贏家，返回 null
  };

  return (
    <div className="game-wrapper"> {/* 遊戲容器 */}
      <h1>Tic-Tac-Toe Game</h1> {/* 遊戲標題 */}
      <div className="game-board"> {/* 遊戲板容器 */}
        {gameBoard.map((cell, index) => ( // 遍歷遊戲板狀態數組
          <div 
            key={index} 
            className="cell" 
            onClick={() => handleCellClick(index)} // 設置單元格點擊事件處理器
          >
            {cell} {/* 顯示單元格內容 */}
          </div>
        ))}
      </div>
      <div className="game-info"> {/* 遊戲信息容器 */}
        <p>{gameStatus}</p> {/* 顯示遊戲狀態信息 */}
      </div>
    </div>
  );
};

export default TicTacToe; // 導出 TicTacToe 組件
