import React from "react"; // 導入 React 模組
import { useState } from "react"; // 導入 useState 鉤子
import MySlider from "./MySlider"; // 導入 MySlider 組件

function MyRGBPanel() {
    // 使用 useState 鉤子來定義狀態變量 r、g、b，初始值均為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義更新 r、g、b 的函式
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義 CSS 樣式對象 rgbCss
    const rgbCss = {
        border: "1px solid blue", // 設置邊框樣式
        borderRadius: "20px", // 設置邊框圓角
        width: "300px", // 設置寬度
        display: "flex", // 設置彈性佈局
        flexDirection: "column", // 設置主軸方向為列方向
        padding: "20px", // 設置內邊距
        justifyContent: "center", // 在主軸上居中對齊
        alignItems: "center", // 在交叉軸上居中對齊
        margin: "auto", // 自動外邊距，使元素水平居中
    };

    return (
        <>
            {/* RGB 色彩面板的容器 */}
            <div style={rgbCss}>
                {/* 標題 */}
                <h2 style={{ color: "red" }}>目前色彩</h2>
                {/* 顯示當前 RGB 色彩的區域 */}
                <div
                    style={{
                        width: "250px", // 設置寬度
                        height: "100px", // 設置高度
                        backgroundColor: `rgb(${r}, ${g}, ${b})`, // 使用 r、g、b 變量設置背景色
                    }}
                />
                {/* 調整 R 色彩的滑動條 */}
                <span>R: </span>
                <MySlider onChange={updateR} />
                {/* 調整 G 色彩的滑動條 */}
                <span>G: </span>
                <MySlider onChange={updateG} />
                {/* 調整 B 色彩的滑動條 */}
                <span>B: </span>
                <MySlider onChange={updateB} />
            </div>
        </>
    );
}

export default MyRGBPanel; // 導出 MyRGBPanel 組件
