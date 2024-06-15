import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel"
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

function App() {
  return (
    <div className="App">
      <h1>JavaScript程式設計</h1>
      <h2>5B0G0040 張紘緯</h2>
      <MySlider />
      <h1>MyRGBPanel</h1>
      <MyRGBPanel />
      <h1>MyCalculator</h1>
      <MyCalculator />
      <h1>Tic-Tac-Toe Game</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
