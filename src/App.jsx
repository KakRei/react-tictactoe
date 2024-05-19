import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function App() {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ xIsNext, setXIsNext ] = useState(true);

  function handleClick(i) {
    if (squares[i] || calcualteWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calcualteWinner(squares);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = "Next player " + (xIsNext? "X" : "O")
  }
  

  return (
    <>
    <span className="status">
      {status}
    </span>
    <div className="board">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    </>
  )
}

function calcualteWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines [i];
  
    if (squares[a] && squares[a] === squares[b] && squares[c]) {
      return squares[a];
    }
  }

  return false;
}
