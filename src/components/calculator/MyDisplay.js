import React from 'react'; // 導入 React 模組

function MyDisplay(props){
    return <div className='display'>{props.result}</div>; // 返回一個 div 元素，顯示 props 中的 result
}
     
export default MyDisplay; // 導出 MyDisplay 組件
