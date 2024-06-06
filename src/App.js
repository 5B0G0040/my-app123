import React, { useState } from 'react';
import './App.css'; // 引入全局 CSS 文件
import TicTacToe from './TicTacToe'; // 導入 TicTacToe 組件

function App() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 }); // 設置顏色狀態
  const [calcDisplay, setCalcDisplay] = useState(''); // 設置計算器顯示狀態
  const [currentInput, setCurrentInput] = useState(''); // 設置當前輸入狀態
  const [operator, setOperator] = useState(''); // 設置操作符狀態
  const [previousValue, setPreviousValue] = useState(''); // 設置前一值狀態

  const updateColor = (e) => {
    setColor({ ...color, [e.target.name]: parseInt(e.target.value, 10) }); // 更新顏色
  };

  const appendNumber = (number) => {
    setCurrentInput(currentInput + number); // 添加數字
    setCalcDisplay(currentInput + number); // 更新顯示
  };

  const appendOperator = (op) => {
    if (op === '+/-') {
      const newInput = currentInput.charAt(0) === '-' ? currentInput.slice(1) : '-' + currentInput;
      setCurrentInput(newInput); // 切換正負號
      setCalcDisplay(newInput); // 更新顯示
    } else {
      setOperator(op); // 設置操作符
      setPreviousValue(currentInput); // 設置前一值
      setCurrentInput(''); // 清空當前輸入
    }
  };

  const clearCalc = () => {
    setCurrentInput(''); // 清空當前輸入
    setOperator(''); // 清空操作符
    setPreviousValue(''); // 清空前一值
    setCalcDisplay(''); // 清空顯示
  };

  const calculateResult = () => {
    let result;
    const currentValue = parseFloat(currentInput); // 解析當前值
    const prevValue = parseFloat(previousValue); // 解析前一值
    switch (operator) {
      case '+':
        result = prevValue + currentValue; // 加法運算
        break;
      case '-':
        result = prevValue - currentValue; // 減法運算
        break;
      case '*':
        result = prevValue * currentValue; // 乘法運算
        break;
      case '/':
        result = prevValue / currentValue; // 除法運算
        break;
      case '%':
        result = prevValue % currentValue; // 取模運算
        break;
      default:
        return;
    }
    setCalcDisplay(result.toString()); // 更新顯示
    setCurrentInput(result.toString()); // 設置當前輸入
    setPreviousValue(''); // 清空前一值
    setOperator(''); // 清空操作符
  };

  const colorStyle = {
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`, // 設置背景顏色
    width: '90%', // 寬度
    height: '500px', // 高度
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>5B0G0040 張紘緯</h1>
        <div className="info-container">
          <h2>RGB pentile</h2>
          <h3>目前的顏色</h3>
          <div className="slider-container">
            <label>R: <input type="range" name="r" min="0" max="255" value={color.r} onChange={updateColor} /></label>
            <label>G: <input type="range" name="g" min="0" max="255" value={color.g} onChange={updateColor} /></label>
            <label>B: <input type="range" name="b" min="0" max="255" value={color.b} onChange={updateColor} /></label>
          </div>
        </div>
        <div style={{ ...colorStyle, marginTop: '100px' }} className="color-display"></div> {/* 顏色顯示框 */}

        <div className="calculator-wrapper">
          <h1>計算機</h1>
          <div className="calculator">
            <div className="calculator-display">{calcDisplay}</div> {/* 計算器顯示屏 */}
            <button className="button-clear" onClick={clearCalc}>C</button> {/* 清除按鈕 */}
            <button className="button-operator" onClick={() => appendOperator('+/-')}>+/-</button> {/* 正負號切換按鈕 */}
            <button className="button-operator" onClick={() => appendOperator('%')}>%</button> {/* 取模按鈕 */}
            <button className="button-operator" onClick={() => appendOperator('/')}>/</button> {/* 除法按鈕 */}<br />
            <button className="button-number" onClick={() => appendNumber('7')}>7</button> {/* 數字按鈕 */}
            <button className="button-number" onClick={() => appendNumber('8')}>8</button> {/* 數字按鈕 */}
            <button className="button-number" onClick={() => appendNumber('9')}>9</button> {/* 數字按鈕 */}
            <button className="button-operator" onClick={() => appendOperator('*')}>*</button> {/* 乘法按鈕 */}<br />
            <button className="button-number" onClick={() => appendNumber('4')}>4</button> {/* 數字按鈕 */}
            <button className="button-number" onClick={() => appendNumber('5')}>5</button> {/* 數字按鈕 */}
            <button className="button-number" onClick={() => appendNumber('6')}>6</button> {/* 數字按鈕 */}
            <button className="button-operator" onClick={() => appendOperator('-')}>-</button> {/* 減法按鈕 */}<br />
            <button className="button-number" onClick={() => appendNumber('1')}>1</button> {/* 數字按鈕 */}
            <button className="button-number" onClick={() => appendNumber('2')}>2</button> {/* 數字按鈕 */}
            <button className="button-number" onClick={() => appendNumber('3')}>3</button> {/* 數字按鈕 */}
            <button className="button-operator" onClick={() => appendOperator('+')}>+</button> {/* 加法按鈕 */}<br />
            <button className="button-number button-zero" onClick={() => appendNumber('0')}>0</button> {/* 零按鈕 */}
            <button className="button-number" onClick={() => appendNumber('.')}>.</button> {/* 小數點按鈕 */}
            <button className="button-operator" onClick={calculateResult}>=</button> {/* 等於按鈕 */}
          </div>
        </div>

        <div className="game-container">
          <TicTacToe /> {/* 井字遊戲組件 */}
        </div>
      </header>
    </div>
  );
}

export default App; // 導出 App 組件
