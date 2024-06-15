import React from "react";
import Square from "./Square"; // 導入方格組件
import "./tictactoe.css"; // 導入 CSS 樣式

function Board({ xIsNext, squares, onPlay }) {
  // 點擊方格時的事件處理函數
  const handleClick = (i) => {
    // 如果已有勝者或方格已被佔用，則返回
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    // 根據下一個玩家更新方格的值
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // 執行 onPlay 函數，將更新後的方格傳遞給父組件
    onPlay(nextSquares);
  };

  // 檢查是否有勝利者的函數
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i <= lines.length - 1; i++) {
      const [a, b, c] = lines[i];
      // 如果三個方格的值相同，則返回該值，表示有勝利者
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };

  // 判斷贏家以及下一個玩家的狀態訊息
  const winner = calculateWinner(squares);
  let status = winner
    ? `贏家: ${winner}`
    : `下一個玩家: ${xIsNext ? "X" : "O"}`;

  // 返回棋盤的 JSX 結構
  return (
    <>
      {/* 顯示遊戲狀態 */}
      <div className="status">{status}</div>
      {/* 棋盤格子 */}
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board; // 導出 Board 組件
