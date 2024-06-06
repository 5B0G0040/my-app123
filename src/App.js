import React, { useState } from 'react'; // 導入 React 和 useState 钩子
import './App.css'; // 導入 CSS 文件
import TicTacToe from './TicTacToe'; // 導入 TicTacToe 组件

function App() { // 定義主應用程序组件
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 }); // 初始化顏色狀態
  const [calcDisplay, setCalcDisplay] = useState(''); // 初始化計算機顯示狀態
  const [currentInput, setCurrentInput] = useState(''); // 初始化當前輸入狀態
  const [operator, setOperator] = useState(''); // 初始化運算符狀態
  const [previousValue, setPreviousValue] = useState(''); // 初始化先前數值狀態

  const updateColor = (e) => { // 定義更新顏色函數
    setColor({ ...color, [e.target.name]: parseInt(e.target.value, 10) }); // 更新顏色狀態
  };

  const appendNumber = (number) => { // 定義添加數字函數
    setCurrentInput(currentInput + number); // 更新當前輸入
    setCalcDisplay(currentInput + number); // 更新計算機顯示
  };

  const appendOperator = (op) => { // 定義添加運算符函數
    if (op === '+/-') { // 處理正負號切換
      const newInput = currentInput.charAt(0) === '-' ? currentInput.slice(1) : '-' + currentInput; // 切換正負號
      setCurrentInput(newInput); // 更新當前輸入
      setCalcDisplay(newInput); // 更新計算機顯示
    } else { // 處理其他運算符
      setOperator(op); // 設置運算符
      setPreviousValue(currentInput); // 設置先前數值
      setCurrentInput(''); // 清空當前輸入
    }
  };

  const clearCalc = () => { // 定義清空計算機函數
    setCurrentInput(''); // 清空當前輸入
    setOperator(''); // 清空運算符
    setPreviousValue(''); // 清空先前數值
    setCalcDisplay(''); // 清空計算機顯示
  };

  const calculateResult = () => { // 定義計算結果函數
    let result; // 初始化結果變量
    const currentValue = parseFloat(currentInput); // 解析當前數值
    const prevValue = parseFloat(previousValue); // 解析先前數值
    switch (operator) { // 根據運算符計算結果
      case '+':
        result = prevValue + currentValue; // 加法
        break;
      case '-':
        result = prevValue - currentValue; // 減法
        break;
      case '*':
        result = prevValue * currentValue; // 乘法
        break;
      case '/':
        result = prevValue / currentValue; // 除法
        break;
      case '%':
        result = prevValue % currentValue; // 取模
        break;
      default:
        return; // 如果運算符無效，返回
    }
    setCalcDisplay(result.toString()); // 更新計算機顯示
    setCurrentInput(result.toString()); // 更新當前輸入
    setPreviousValue(''); // 清空先前數值
    setOperator(''); // 清空運算符
  };

  const colorStyle = { // 定義顏色樣式
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`, // 背景顏色
    width: '90%', // 寬度
    height: '500px', // 高度
  };

  return ( // 返回 JSX 標記
    <div className="App"> // 應用程序主容器
      <header className="App-header"> // 頁眉
        <h1>5B0G0040 張紘緯</h1> // 顯示標題
        <div className="info-container"> // 信息容器
          <h2>RGB pentile</h2> // 顯示副標題
          <h3>目前的顏色</h3> // 顯示目前顏色標題
          <div className="slider-container"> // 滑動條容器
            <label>R: <input type="range" name="r" min="0" max="255" value={color.r} onChange={updateColor} /></label> // 紅色滑動條
            <label>G: <input type="range" name="g" min="0" max="255" value={color.g} onChange={updateColor} /></label> // 綠色滑動條
            <label>B: <input type="range" name="b" min="0" max="255" value={color.b} onChange={updateColor} /></label> // 藍色滑動條
          </div>
        </div>
        <div style={{ ...colorStyle, marginTop: '100px' }} className="color-display"></div> // 顯示顏色

        <div className="calculator-wrapper"> // 計算機包裝容器
          <h1>計算機</h1> // 計算機標題
          <div className="calculator"> // 計算機容器
            <div className="calculator-display">{calcDisplay}</div> // 計算機顯示
            <button className="button-clear" onClick={clearCalc}>C</button> // 清空按鈕
            <button className="button-operator" onClick={() => appendOperator('+/-')}>+/-</button> // 正負號按鈕
            <button className="button-operator" onClick={() => appendOperator('%')}>%</button> // 取模按鈕
            <button className="button-operator" onClick={() => appendOperator('/')}>/</button><br /> // 除法按鈕
            <button className="button-number" onClick={() => appendNumber('7')}>7</button> // 數字7按鈕
            <button className="button-number" onClick={() => appendNumber('8')}>8</button> // 數字8按鈕
            <button className="button-number" onClick={() => appendNumber('9')}>9</button> // 數字9按鈕
            <button className="button-operator" onClick={() => appendOperator('*')}>*</button><br /> // 乘法按鈕
            <button className="button-number" onClick={() => appendNumber('4')}>4</button> // 數字4按鈕
            <button className="button-number" onClick={() => appendNumber('5')}>5</button> // 數字5按鈕
            <button className="button-number" onClick={() => appendNumber('6')}>6</button> // 數字6按鈕
            <button className="button-operator" onClick={() => appendOperator('-')}>-</button><br /> // 減法按鈕
            <button className="button-number" onClick={() => appendNumber('1')}>1</button> // 數字1按鈕
            <button className="button-number" onClick={() => appendNumber('2')}>2</button> // 數字2按鈕
            <button className="button-number" onClick={() => appendNumber('3')}>3</button> // 數字3按鈕
            <button className="button-operator" onClick={() => appendOperator('+')}>+</button><br /> // 加法按鈕
            <button className="button-number button-zero" onClick={() => appendNumber('0')}>0</button> // 數字0按鈕
            <button className="button-number" onClick={() => appendNumber('.')}>.</button> // 小數點按鈕
            <button className="button-operator" onClick={calculateResult}>=</button> // 等於按鈕
          </div>
        </div>

        <div className="game-container"> // 遊戲容器
          <TicTacToe /> // 渲染 TicTacToe 组件
        </div>
      </header>
    </div>
  );
}

export default App; // 導出主應用程序组件
