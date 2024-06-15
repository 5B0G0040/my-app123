import { useState } from "react"; // 導入 useState 鉤子

function MySlider({onChange}) {
  // 使用 useState 鉤子來定義狀態變量 value，初始值為 128
  const [value, setValue] = useState(128);

  // 定義 handleChange 函式，用於處理滑動條值的變化事件
  const handleChange = (e) => {
    setValue(e.target.value); // 更新 value 的值為滑動條的當前值
    // 如果傳入了 onChange 屬性，則調用它並將當前值作為參數傳遞
    if (onChange){
      onChange(e.target.value);
    }
  };

  // 返回滑動條組件的 JSX 結構
  return (
    <div>
      {/* input 元素，類型為 range，允許用戶在指定範圍內調整值 */}
      <input
        type="range" // 設置輸入類型為 range
        width = "200" // 設置寬度為 200
        min="0" // 設置最小值為 0
        max="255" // 設置最大值為 255
        value={value} // 設置當前值為狀態變量 value
        onChange={handleChange} // 設置變化事件的處理函式為 handleChange
      />
      {/* 顯示滑動條的當前值 */}
      <span>{value}</span>
    </div>
  );
}

export default MySlider; // 導出 MySlider 組件
