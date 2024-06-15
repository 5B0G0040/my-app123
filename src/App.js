import React, { useState } from 'react';
import './App.css'; // 引入全局 CSS 文件
import TicTacToe from './TicTacToe'; // 導入 TicTacToe 組件

function App() {
  // 設置顏色狀態，初始值為紅色、綠色和藍色均為0
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  // 設置計算器顯示狀態，初始值為空字串
  const [calcDisplay, setCalcDisplay] = useState('');
  // 設置當前輸入狀態，初始值為空字串
  const [currentInput, setCurrentInput] = useState('');
  // 設置操作符狀態，初始值為空字串
  const [operator, setOperator] = useState('');
  // 設置前一值狀態，初始值為空字串
  const [previousValue, setPreviousValue] = useState('');

  // 更新顏色狀態
  const updateColor = (e) => {
    setColor({ ...color, [e.target.name]: parseInt(e.target.value, 10) });
  };

  // 添加數字到當前輸入並更新顯示
  const appendNumber = (number) => {
    setCurrentInput(currentInput + number);
    setCalcDisplay(currentInput + number);
  };

  // 添加操作符或切換正負號
  const appendOperator = (op) => {
    if (op === '+/-') {
      const newInput = currentInput.charAt(0) === '-' ? currentInput.slice(1) : '-' + currentInput;
      setCurrentInput(newInput);
      setCalcDisplay(newInput);
    } else {
      setOperator(op);
      setPreviousValue(currentInput);
      setCurrentInput('');
    }
  };

  // 清空計算器的所有狀態
  const clearCalc = () => {
    setCurrentInput('');
    setOperator('');
    setPreviousValue('');
    setCalcDisplay('');
  };

  // 計算結果並更新顯示
  const calculateResult = () => {
    let result;
    const currentValue = parseFloat(currentInput);
    const prevValue = parseFloat(previousValue);
    switch (operator) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '*':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      case '%':
        result = prevValue % currentValue;
        break;
      default:
        return;
    }
    setCalcDisplay(result.toString());
    setCurrentInput(result.toString());
    setPreviousValue('');
    setOperator('');
  };

  // 設置背景顏色的樣式
  const colorStyle = {
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    width: '90%', // 寬度
    height: '500px', // 高度
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>5B0G0040 張紘緯</h1> {/* 顯示學生編號和姓名 */}
        <div className="info-container">
          <h2>RGB pentile</h2> {/* 顯示 RGB 顏色調整標題 */}
          <h3>目前的顏色</h3> {/* 顯示目前的顏色標題 */}
          <div className="slider-container">
            <label>R: <input type="range" name="r" min="0" max="255" value={color.r} onChange={updateColor} /></label> {/* 紅色調整滑桿 */}
            <label>G: <input type="range" name="g" min="0" max="255" value={color.g} onChange={updateColor} /></label> {/* 綠色調整滑桿 */}
            <label>B: <input type="range" name="b" min="0" max="255" value={color.b} onChange={updateColor} /></label> {/* 藍色調整滑桿 */}
          </div>
        </div>
        <div style={{ ...colorStyle, marginTop: '100px' }} className="color-display"></div> {/* 顯示調整後的顏色框 */}

        <div className="calculator-wrapper">
          <h1>計算機</h1> {/* 計算器標題 */}
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
