import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const [calcDisplay, setCalcDisplay] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [operator, setOperator] = useState('');
  const [previousValue, setPreviousValue] = useState('');

  const updateColor = (e) => {
    setColor({ ...color, [e.target.name]: parseInt(e.target.value, 10) });
  };

  const appendNumber = (number) => {
    setCurrentInput(currentInput + number);
    setCalcDisplay(currentInput + number);
  };

  const appendOperator = (op) => {
    if (op === '+/-') {
      setCurrentInput(currentInput.charAt(0) === '-' ? currentInput.slice(1) : '-' + currentInput);
      setCalcDisplay(currentInput.charAt(0) === '-' ? currentInput.slice(1) : '-' + currentInput);
    } else {
      setOperator(op);
      setPreviousValue(currentInput);
      setCurrentInput('');
    }
  };

  const clearCalc = () => {
    setCurrentInput('');
    setOperator('');
    setPreviousValue('');
    setCalcDisplay('');
  };

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
    setCalcDisplay(result);
    setCurrentInput(result);
    setPreviousValue('');
    setOperator('');
  };

  const colorStyle = {
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    width: '90%',
    height: '500px',
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
        <div style={{ ...colorStyle, marginTop: '100px' }} className="color-display"></div>

        <div className="calculator-wrapper">
          <h1>計算機</h1>
          <div className="calculator">
            <div className="calculator-display">{calcDisplay}</div>
            <button className="button-clear" onClick={clearCalc}>C</button>
            <button className="button-operator" onClick={() => appendOperator('+/-')}>+/-</button>
            <button className="button-operator" onClick={() => appendOperator('%')}>%</button>
            <button className="button-operator" onClick={() => appendOperator('/')}>/</button><br />
            <button className="button-number" onClick={() => appendNumber('7')}>7</button>
            <button className="button-number" onClick={() => appendNumber('8')}>8</button>
            <button className="button-number" onClick={() => appendNumber('9')}>9</button>
            <button className="button-operator" onClick={() => appendOperator('*')}>*</button><br />
            <button className="button-number" onClick={() => appendNumber('4')}>4</button>
            <button className="button-number" onClick={() => appendNumber('5')}>5</button>
            <button className="button-number" onClick={() => appendNumber('6')}>6</button>
            <button className="button-operator" onClick={() => appendOperator('-')}>-</button><br />
            <button className="button-number" onClick={() => appendNumber('1')}>1</button>
            <button className="button-number" onClick={() => appendNumber('2')}>2</button>
            <button className="button-number" onClick={() => appendNumber('3')}>3</button>
            <button className="button-operator" onClick={() => appendOperator('+')}>+</button><br />
            <button className="button-number button-zero" onClick={() => appendNumber('0')}>0</button>
            <button className="button-number" onClick={() => appendNumber('.')}>.</button>
            <button className="button-operator" onClick={calculateResult}>=</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;