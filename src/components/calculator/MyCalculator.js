import React, { useState } from "react";
import MyDisplay from "./MyDisplay"; // 導入 MyDisplay 組件
import MyButton from "./MyButton"; // 導入 MyButton 組件
import "./MyCalculator.css"; // 導入計算機的 CSS 文件

function MyCalculator() {
  // 定義狀態 result，初始值為 "0"
  const [result, setResult] = useState("0");

  // 定義點擊按鈕時的事件處理函式
  const handleClick = (value) => {
    // 根據按鈕的值執行不同的操作
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        // 如果 result 為 "0"，則直接將按鈕的值賦值給 result；否則將按鈕的值追加到 result
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        // 使用 eval 函式計算 result 的值，並將結果轉換為字符串後賦值給 result
        setResult(eval(result).toString());
        break;
      case "c":
        // 清空 result
        setResult("");
        break;
      case "+/-":
        // 將 result 轉換為數字後乘以 -1，並賦值給 result
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        // 將 result 轉換為數字後除以 100，並賦值給 result
        setResult(parseInt(result, 10) / 100);
        break;
      default:
        break;
    }
  };

  // 返回計算機組件的 JSX 結構
  return (
    <div className="calculator"> {/* 計算機外部容器 */}
      <MyDisplay result={result} /> {/* 使用 MyDisplay 組件顯示計算結果 */}
      <MyButton buttonClicked={handleClick} /> {/* 使用 MyButton 組件作為按鈕 */}
    </div>
  );
}

export default MyCalculator; // 導出 MyCalculator 組件
