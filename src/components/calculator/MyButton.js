import React from "react";
import "./MyCalculator.css"; // 引入計算機組件的 CSS 文件

// 定義 MyButton 組件，該組件接收 props 作為參數
function MyButton(props) {
    // 定義 handleClick 函數，用於處理按鈕點擊事件
    const handelClick = (e) => {
        // 調用父組件傳遞過來的 buttonClicked 函數，並將按鈕的值作為參數傳遞
        props.buttonClicked(e.target.value);
        // 顯示按鈕的值（這一行已被註釋掉）
        // alert(e.target.value);
    }

    // 返回組件的 JSX 結構
    return (
        <div className="board"> {/* 計算機按鈕的外部容器 */}
            <div> {/* 第一行按鈕 */}
                <button className="btn btn-action" value="c" onClick={handelClick}>C</button> {/* 清除按鈕 */}
                <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button> {/* 正負號切換按鈕 */}
                <button className="btn btn-action" value="%" onClick={handelClick}>%</button> {/* 取模按鈕 */}
                <button className="btn btn-operator" value="/" onClick={handelClick}>/</button> {/* 除法按鈕 */}
            </div>
            <div> {/* 第二行按鈕 */}
                <button className="btn" value="7" onClick={handelClick}>7</button> {/* 數字 7 */}
                <button className="btn" value="8" onClick={handelClick}>8</button> {/* 數字 8 */}
                <button className="btn" value="9" onClick={handelClick}>9</button> {/* 數字 9 */}
                <button className="btn btn-operator" value="*" onClick={handelClick}>*</button> {/* 乘法按鈕 */}
            </div>
            <div> {/* 第三行按鈕 */}
                <button className="btn" value="4" onClick={handelClick}>4</button> {/* 數字 4 */}
                <button className="btn" value="5" onClick={handelClick}>5</button> {/* 數字 5 */}
                <button className="btn" value="6" onClick={handelClick}>6</button> {/* 數字 6 */}
                <button className="btn btn-operator" value="-" onClick={handelClick}>-</button> {/* 減法按鈕 */}
            </div>
            <div> {/* 第四行按鈕 */}
                <button className="btn" value="1" onClick={handelClick}>1</button> {/* 數字 1 */}
                <button className="btn" value="2" onClick={handelClick}>2</button> {/* 數字 2 */}
                <button className="btn" value="3" onClick={handelClick}>3</button> {/* 數字 3 */}
                <button className="btn btn-operator" value="+" onClick={handelClick}>+</button> {/* 加法按鈕 */}
            </div>
            <div> {/* 第五行按鈕 */}
                <button className="btn btn-0" value="0" onClick={handelClick}>0</button> {/* 數字 0 */}
                <button className="btn" value="." onClick={handelClick}>.</button> {/* 小數點按鈕 */}
                <button className="btn btn-operator" value="=" onClick={handelClick}>=</button> {/* 等號按鈕 */}
            </div>
        </div>
    );
}

export default MyButton; // 導出 MyButton 組件
