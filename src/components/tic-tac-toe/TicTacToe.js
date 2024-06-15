import React, { useState } from "react";
import Board from "./Board"; // 導入棋盤組件
import "./tictactoe.css"; // 導入樣式文件

function TicTacToe() {
  // 定義狀態
  const [history, setHistory] = useState([Array(9).fill(null)]); // 歷史紀錄狀態，初始為一個9個空方格的陣列
  const [currentMove, setCurrentMove] = useState(0); // 當前移動的步數狀態，初始為0
  const currentSquares = history[currentMove]; // 當前方格的狀態
  const xIsNext = currentMove % 2 === 0; // 下一步是 'X' 還是 'O'，如果步數為偶數，則為 'X'

  // 處理玩家下棋
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // 創建下一個歷史紀錄
    setHistory(nextHistory); // 更新歷史紀錄狀態
    setCurrentMove(nextHistory.length - 1); // 更新當前移動的步數
  };

  // 跳轉到特定步數
  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  // 生成遊戲歷程按鈕
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "回到第 " + move + " 步"; // 如果不是初始步數，顯示回到第幾步
    } else {
      description = "遊戲開始"; // 初始步數顯示遊戲開始
    }
    return (
      <>
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button> {/* 點擊按鈕跳轉到特定步數 */}
        </li>
      </>
    );
  });

  // 返回遊戲組件
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /> {/* 棋盤組件 */}
      </div>
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol> {/* 顯示遊戲歷程 */}
      </div>
    </div>
  );
}

export default TicTacToe; // 導出遊戲組件