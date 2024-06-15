import React from "react";
import "./tictactoe.css"; // 導入方格樣式的 CSS 文件

function Square({ value, onSquareClick }) {
  // 方格組件，接收 value 和 onSquareClick 兩個 props
  return (
    <button className="square" onClick={onSquareClick}>
      {value} {/* 在按鈕上顯示方格的值 */}
    </button>
  );
}

export default Square; // 導出 Square 組件
