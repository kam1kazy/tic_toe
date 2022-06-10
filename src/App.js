import { useState } from "react";
import Board from "./board/Board";
import { calculateWinner } from "./helpers/Logic";

import "./styles.css";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);



  const handleClick = (index) => {
    const boardCopy = [...board];

    console.log(boardCopy);

    // Определяем клик и победителя 
    if (winner || boardCopy[index]) return;

    // Кто ходит следующий
    boardCopy[index] = xIsNext ? "X" : "O";

    // Обновить состояния
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}> Очистить поле</button>
    )
  }

  return (
    <div className="App">
      <h1>Крестики Нолики</h1>

      <Board squares={board} click={handleClick} />

      <br/>
      <p>{ winner ? 'Победитель: ' + winner : 'Сейчас ходит: ' + (xIsNext ? 'X' : 'O') }</p>
      <br/>

      { startNewGame() }
    </div>
  );
}
